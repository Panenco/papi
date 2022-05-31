import { Request } from 'express';

/**
 * Authorization definition base type
 *
 * Implementation should validate required check and throw [[Unauthorized]] or [[Forbidden]] Exception
 *
 * @category Authorization
 */
export type IRequirement = (request: Request) => Promise<void> | void;
