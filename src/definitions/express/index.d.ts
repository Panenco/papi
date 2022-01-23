declare module 'express' {
  interface Request {
    token: unknown;
    rawBody: any;
  }
  interface Response {
    body: any;
  }
}
