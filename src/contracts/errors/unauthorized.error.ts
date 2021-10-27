import { ErrorBase } from './errorBase.error';

export class Unauthorized extends ErrorBase {
  constructor(reason: string, message: string) {
    super(401, reason, message);
  }
}
