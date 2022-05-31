import { ErrorBase } from './errorBase.error';

/**
 * Http error with status code 401
 *
 * @category Error
 */
export class Unauthorized extends ErrorBase {
  constructor(reason: string, message: string, payload?: object) {
    super(401, reason, message, payload);
  }
}
