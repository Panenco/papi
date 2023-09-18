import { ErrorBase, StatusCode } from 'contracts';
import { NextFunction, Request, Response } from 'express';
import { HttpError } from 'routing-controllers';

type ErrorData = {
  status: number;
  message: string;
  payload: object;
  reason: string;
};

/**
 * Express middleware to process and output errors.
 *
 * Errors extended from [[`ErrorBase`]] or [[`HttpError`]] will be handled and serialized to the response with the corresponding code
 * @param error Error to be processed. ErrorBase will be processed accordingly. Any other Error will result into a 500 with the specified message.
 * @param req express Request
 * @param res express Response
 * @param next express NextFunction
 *
 * @category Middleware
 */
export const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
  try {
    let errorData: ErrorData;
    if (error instanceof ErrorBase) {
      errorData = getErrorBaseData(error);
    } else if (error instanceof HttpError) {
      errorData = getHttpErrorData(error);
    } else {
      errorData = getErrorData(error);
    }

    const { status, message, payload, reason } = errorData;

    if (process.env.PAPIVERBOSE !== 'none') {
      console.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Reason:: ${reason}, Message:: ${message}, Payload:: `, payload);
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

function getHttpErrorData(error: HttpError): ErrorData {
  return {
    status: error.httpCode || StatusCode.serverError,
    message: error.message,
    payload: {},
    reason: '',
  };
}

function getErrorBaseData(error: ErrorBase): ErrorData {
  return {
    status: error.code || StatusCode.serverError,
    message: error.message,
    payload: error.payload,
    reason: error.reason,
  };
}

function getErrorData(error: Error): ErrorData {
  return {
    status: StatusCode.serverError,
    message: error.message,
    payload: {},
    reason: '',
  };
}
