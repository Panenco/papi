import { NextFunction, Request, Response } from 'express';

import { getAccessTokenData } from '../authorization/accessTokens';
import { handleAllRequirements, handleEitherRequirements } from '../authorization/handleRequirements';
import { IRequirement } from '../authorization/requirement.interface';
import { Unauthorized } from '../errors/unauthorized';

export const authenticator = (
  requirements: (IRequirement | IRequirement[])[] = [],
  allRequirementsValid: boolean = true
) => {
  const handler = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const token = request.header("x-auth");

    if (!token) {
      throw new Unauthorized("invalidToken", "Invalid token");
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
