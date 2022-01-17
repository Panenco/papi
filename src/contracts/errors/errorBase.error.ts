import { StatusCode } from 'contracts';
import { HttpError } from 'routing-controllers';

/**
 * Base for API Error
 */
export class ErrorBase extends HttpError {
  public code: number;
  public reason: string;
  public message: string;
  public payload?: object;

  constructor(code: StatusCode, reason: string, message: string, payload?: object) {
    super(code, message);
    this.code = code;
    this.reason = reason || this.constructor.name;
    this.message = message;
    this.payload = payload;
  }
}
