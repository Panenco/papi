import { getAccessTokenData, handleAllRequirements, handleEitherRequirements, IRequirement } from 'authorization';
import { Unauthorized } from 'contracts/errors';
import { NextFunction, Request, Response } from 'express';

export const authenticator = (
  requirements: (IRequirement | IRequirement[])[] = [],
  allRequirementsValid: boolean = true,
) => {
  const handler = async (request: Request, response: Response, next: NextFunction) => {
    const token = request.header('x-auth');

    if (!token) {
      throw new Unauthorized('invalidToken', 'Invalid token');
    }

    request.token = getAccessTokenData(token, process.env.JWT_SECRET);

    if (allRequirementsValid) {
      await handleAllRequirements(requirements as IRequirement[], request);
    } else {
      await handleEitherRequirements(requirements, request);
    }

    next();
  };

  return handler;
};
