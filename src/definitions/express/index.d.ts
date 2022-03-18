import { IAccessToken } from '../..';

declare module 'express' {
  interface Request {
    token: IAccessToken;
  }
  interface Response {
    body: any;
  }
}
