import { Request } from 'express';

export type IRequirement = (request: Request) => Promise<void>;
