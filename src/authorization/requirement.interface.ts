import { Request } from 'express';

import { ErrorBase } from '../errors/errorBase';

export type IRequirement = (request: Request) => Promise<ErrorBase>;
