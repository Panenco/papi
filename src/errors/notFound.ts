import { ErrorBase } from './errorBase';

export class NotFound extends ErrorBase {
  constructor(reason: string, message: string) {
    super(404, reason, message);
  }
}
