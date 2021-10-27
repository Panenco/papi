import { ErrorBase } from './errorBase';

export class Conflict extends ErrorBase {
  constructor(reason: string, message: string) {
    super(409, reason, message);
  }
}
