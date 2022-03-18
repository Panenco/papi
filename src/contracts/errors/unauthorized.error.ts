import { ErrorBase } from './errorBase.error';

/**
 * Http error with status code 401
 */
export class Unauthorized extends ErrorBase {
  constructor(reason: string, message: string, payload?: object) {
    super(401, reason, message, payload);
  }
}
