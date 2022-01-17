/**
 * Base data for Authorization token data response
 */
export interface IAccessToken {
  token: string;
  expiresIn: number;
}
