import { HttpError as RoutingControllerHttpError } from 'routing-controllers';

export class HttpError extends RoutingControllerHttpError {
  public status: number;
  public message: string;
  public payload?: object;

  constructor(status: number, message: string, payload?: object) {
    super(status, message);
    this.status = status;
    this.message = message;
    this.payload = payload;
  }
}
