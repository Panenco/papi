import { ErrorBase } from './errorBase.error';

/**
 * Http error with status code 403
 */
export class Forbidden extends ErrorBase {
  constructor(reason: string, message: string, payload?: object) {
    super(403, reason, message, payload);
  }
}
