/**
 * Available status codes
 *
 * @category Contract
 */
export enum StatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  conflict = 409,
  retryWith = 449,
  serverError = 500,
}
