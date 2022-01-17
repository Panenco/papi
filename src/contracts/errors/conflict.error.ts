import { ErrorBase } from './errorBase.error';

/**
 * Http error with status code 409 (duplicates)
 */
export class Conflict extends ErrorBase {
  constructor(reason: string, message: string, payload?: object) {
    super(409, reason, message, payload);
  }
}
