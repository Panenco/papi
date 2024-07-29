import { StatusCode } from 'contracts';

/**
 * Base for API Error
 *
 * @category Error
 */
export class ErrorBase extends Error {
  public code: number;
  public reason: string;
  public payload?: object;

  constructor(code: StatusCode, reason: string, message: string, payload?: object) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.reason = reason || this.constructor.name;
    this.payload = payload;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
