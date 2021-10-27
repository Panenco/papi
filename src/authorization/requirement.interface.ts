import { ErrorBase } from 'contracts/errors';
import { Request } from 'express';

export type IRequirement = (request: Request) => Promise<ErrorBase>;
