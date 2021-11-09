import { ErrorBase } from './errorBase.error';

export class BadRequest extends ErrorBase {
  constructor(reason: string, message: string, payload?: object) {
    super(400, reason, message, payload);
  }
}
