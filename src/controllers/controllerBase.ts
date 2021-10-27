import { IDictionary } from '@panenco/pantils';
import { NextFunction, Request, Response } from 'express';

import { RequestContext } from './requestContext';

type allowedMethods = {
  [key: string]: (
    input?: any,
    params?: IDictionary<string>,
    headers?: IDictionary<string>
  ) => Promise<any>;
};

type allowedProperties = {
  context: RequestContext;
};

class _ControllerBase<TExtraProperties = unknown> implements allowedProperties {
  public readonly context: RequestContext;

  constructor(
    request: Request,
    response: Response,
    next: NextFunction,
    extraParams?: TExtraProperties
  ) {
    this.context = new RequestContext(request, response, next);
    extraParams &&
      Object.keys(extraParams).forEach((key) => (this[key] = extraParams[key]));
  }
}
type ExtendedProperties<T> = { [P in keyof T]: T[P] };

const ControllerBase = _ControllerBase as new <TExtraProperties = unknown>(
  request: Request,
  response: Response,
  next: NextFunction,
  extraParams?: TExtraProperties
) => _ControllerBase & ExtendedProperties<TExtraProperties> & allowedMethods;

export {
  ControllerBase as ControllerBase,
  _ControllerBase as _baseControllerType,
};
