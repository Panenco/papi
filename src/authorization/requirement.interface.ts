import { ErrorBase } from 'contracts';
import { Request } from 'express';

export type IRequirement = (request: Request) => Promise<ErrorBase>;
