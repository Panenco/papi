import { ErrorBase, StatusCode } from 'contracts';
import { NextFunction, Request, Response } from 'express';

export const errorMiddleware = (error: ErrorBase, req: Request, res: Response, next: NextFunction) => {
  try {
    const status: number = error.code || error.httpCode || 500;
    const payload: object = error.payload || {};
    const message: string = error.message || 'Something went wrong';
    const reason: string = error.reason || '';

    if (process.env.PAPIVERBOSE !== 'none') {
      console.error(
        `[${req.method}] ${req.path} >> StatusCode:: ${status}, Reason:: ${reason}, Message:: ${message}, Payload:: `,
        payload,
      );
    }

    res.status(StatusCode[status] ? status : 500).json({ message, reason, ...payload });
  } catch (error) {
    next(error);
  }
};
