import { plainToClass } from 'class-transformer';

import { StatusCode } from './statusCode';

export abstract class ResponseBase {
  public status: StatusCode;
  public payload: object;

  constructor(status: StatusCode, payload?: object) {
    this.status = status;
    this.payload = payload;
  }

  public getFormattedResponse(responseDataType: any): any {
    return plainToClass(responseDataType, this.payload, { exposeUnsetFields: false });
  }
}
