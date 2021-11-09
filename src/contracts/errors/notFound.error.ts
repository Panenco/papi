import { ErrorBase } from './errorBase.error';

export class NotFound extends ErrorBase {
  constructor(reason: string, message: string, payload?: object) {
    super(404, reason, message, payload);
  }
}
