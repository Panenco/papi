import { ListRepresentation } from 'contracts/representations';

import { StatusCode } from './statusCode';
import { SuccessResponse } from './success.response';

export class ListResponse extends SuccessResponse {
  public static ok(count: number, items?: object[]): ListResponse {
    return ListResponse.create(StatusCode.ok, count, items);
  }

  public static created(count: number, items?: object[]): ListResponse {
    return ListResponse.create(StatusCode.created, count, items);
  }

  private static create(status: StatusCode, count: number, items?: object[]): ListResponse {
    return new ListResponse(status, new ListRepresentation(count, items));
  }
}
