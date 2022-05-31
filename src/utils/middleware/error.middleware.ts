import { ErrorBase, StatusCode } from 'contracts';
import { NextFunction, Request, Response } from 'express';

/**
 * Express middleware to process and output errors.
 *
 * Errors extended from [[`ErrorBase`]] will be handled and serialized to the response with the corresponding code
 * @param error Error to be processed. ErrorBase will be processed accordingly. Any other Error will result into a 500 with the specified message.
 * @param req express Request
 * @param res express Response
 * @param next express NextFunction
 *
 * @category Middleware
 */
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
    if (status == 500 || !StatusCode[status]) {
      console.error(`[${req.method}] ${req.path}`, req.body, req.query);
      console.error(error, JSON.stringify(error));
    }
    res.status(StatusCode[status] ? status : 500).json({ message, reason, ...payload });
  } catch (error) {
    next(error);
  }
};
