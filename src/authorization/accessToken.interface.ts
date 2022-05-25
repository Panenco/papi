/**
 * Base data for Authorization token data response
 *
 * @category Authorization
 */
export interface IAccessToken {
  token: string;
  expiresIn: number;
}
