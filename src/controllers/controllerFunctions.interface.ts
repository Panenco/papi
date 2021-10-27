import { RequestHandler } from 'express';

export type IControllerFunctions<TController> = {
  [key in keyof TController]: RequestHandler;
};
