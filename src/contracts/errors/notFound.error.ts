import { ErrorBase } from './errorBase.error';

/**
 * Http error with status code 404
 *
 * @category Error
 */
export class NotFound extends ErrorBase {
  constructor(reason: string, message: string, payload?: object) {
    super(404, reason, message, payload);
  }
}
