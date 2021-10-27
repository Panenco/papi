import { getAccessTokenData, handleEitherRequirements, IRequirement } from 'authorization';
import { Unauthorized } from 'contracts';
import { Action } from 'routing-controllers';

export const authenticator = async (action: Action, requirements: (IRequirement | IRequirement[])[]) => {
  const token = action.request.header('x-auth');

  if (!token) {
    throw new Unauthorized('invalidToken', 'Invalid token');
  }

  action.request.token = getAccessTokenData(token, process.env.JWT_SECRET);

  // TODO
  // if (allRequirementsValid) {
  //   await handleAllRequirements(requirements as IRequirement[], request);
  // } else {
  await handleEitherRequirements(requirements, action.request);
  // };
  return true;
};
