import { ErrorBase } from './errorBase.error';

export class Forbidden extends ErrorBase {
  constructor(reason: string, message: string, payload?: object) {
    super(403, reason, message, payload);
  }
}
