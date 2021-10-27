import { NextFunction, Request, Response } from 'express';

export class RequestContext {
  constructor(request: Request, response: Response, next: NextFunction) {
    this.request = request;
    this.response = response;
    this.next = next;
  }
  public request: Request;
  public response: Response;
  public next: NextFunction;
}
