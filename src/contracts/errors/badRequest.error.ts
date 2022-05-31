import { ErrorBase } from './errorBase.error';

/**
 * Http error with status code 400
 *
 * @category Error
 */
export class BadRequest extends ErrorBase {
  constructor(reason: string, message: string, payload?: object) {
    super(400, reason, message, payload);
  }
}
