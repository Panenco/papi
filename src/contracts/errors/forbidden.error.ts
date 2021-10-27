import { ErrorBase } from './errorBase.error';

export class Forbidden extends ErrorBase {
  constructor(reason: string, message: string) {
    super(403, reason, message);
  }
}
