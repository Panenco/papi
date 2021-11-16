import { getAccessTokenData, handleRequirements, IRequirement } from 'authorization';
import { Unauthorized } from 'contracts';
import { Action } from 'routing-controllers';

/**
 * Integrates with `@Authorize` decorator
 * Supply an array of groups where within a group all requirements need to be valid
 * Example1: [[valid1, valid2], [valid3, invalid1]] => success
 * Example2: [valid1, invalid1] => success
 * Example3: [[valid1, invalid1]] => fail
 */

export const getAuthenticator = (jwtSecret: string) => {
  const authenticator = async (action: Action, requirements: (IRequirement | IRequirement[])[] | IRequirement) => {
    const token = action.request.header('x-auth');

    if (!token) {
      throw new Unauthorized('invalidToken', 'Invalid token');
    }

    action.request.token = getAccessTokenData(token, jwtSecret);

    await handleRequirements(requirements, action.request);

    return true;
  };
  return authenticator;
};
