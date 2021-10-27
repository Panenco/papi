import { ClassType, IDictionary } from "@panenco/pantils";
import { NextFunction, Request, RequestHandler, Response } from "express";

import { ResponseBase } from "../responses/responseBase";
import { _baseControllerType } from "./controllerBase";
import { IControllerFunctions } from "./controllerFunctions.interface";

export class Delegator<TController extends _baseControllerType> {
  private readonly controllerType: {
    new (
      request: Request,
      response: Response,
      next: NextFunction,
      extraParams: IDictionary<any>
    ): TController;
  };
  private static wrapper: (
    handler: (extraParams?: IDictionary<any>) => Promise<any>
  ) => Promise<any> = (handler) => handler();

  constructor(controllerType: ClassType<TController>) {
    this.controllerType = controllerType;
  }

  public getFunctions(): IControllerFunctions<TController> {
    const keys = Object.getOwnPropertyNames(this.controllerType.prototype);

    const controllerFunctions: IControllerFunctions<TController> = keys.reduce(
      (object, funcName) => {
        object[funcName] = this.run(funcName as any);
        return object;
      },
      {} as IControllerFunctions<TController>
    );

    return controllerFunctions;
  }

  public static registerWrapper<T>(
    wrapper: (
      handler: (extraParams: IDictionary<any>) => Promise<T>
    ) => Promise<T>
  ) {
    this.wrapper = wrapper;
  }

  private run(func: keyof TController): RequestHandler {
    return async (request: Request, response: Response, next: NextFunction) => {
      const result = await Delegator.wrapper(
        (extraParams: IDictionary<any>) => {
          const controller = new this.controllerType(
            request,
            response,
            next,
            extraParams
          );
          this.validateFunction(controller, func);
          return this.handle(request, controller, func);
        }
      );

      this.validateResult(result, func);

      (response as any).body = result;

      next();
    };
  }

  private async handle(
    request: Request,
    controller: TController,
    func: keyof TController
  ) {
    const input =
      request.body && Object.keys(request.body).length > 0
        ? request.body
        : request.query;

    const handlerResult = await ((controller[func] as unknown) as (
      ...args: any[]
    ) => any)(input, request.params, request.headers);
    return handlerResult;
  }

  private validateResult(result: any, func: keyof TController) {
    if (result && !(result instanceof ResponseBase)) {
      throw new Error(
        `${this.controllerType.name}/${func} returned an invalid response object`
      );
    }
  }

  private validateFunction(controller: TController, func: keyof TController) {
    if (controller[func] && typeof controller[func] !== "function") {
      throw new Error(`Unknown controller function ${func}`);
    }
  }
}
