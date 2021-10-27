import { ErrorBase } from './errorBase';

export class Unauthorized extends ErrorBase {
  constructor(reason: string, message: string) {
    super(401, reason, message);
  }
}
