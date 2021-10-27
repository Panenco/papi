import { ErrorBase } from './errorBase';

export class Forbidden extends ErrorBase {
  constructor(reason: string, message: string) {
    super(403, reason, message);
  }
}
