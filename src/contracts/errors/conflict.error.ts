import { ErrorBase } from './errorBase.error';

export class Conflict extends ErrorBase {
  constructor(reason: string, message: string, payload?: object) {
    super(409, reason, message, payload);
  }
}
