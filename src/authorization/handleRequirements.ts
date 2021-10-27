import { Request } from 'express';

import { promiseAny } from './promiseAny';
import { IRequirement } from './requirement.interface';

const handleAllRequirements = async (
  requirements: IRequirement[],
  request: Request
) => {
  await Promise.all(requirements.map((requirement) => requirement(request)));
};

const handleEitherRequirements = async (
  requirements: (IRequirement | IRequirement[])[],
  request: Request
) => {
  await promiseAny(
    requirements.map(async (requirement) => {
      if (Array.isArray(requirement)) {
        return Promise.all(requirement.map((r) => r(request)));
      }
      return requirement(request);
    })
  );
};

export { handleAllRequirements, handleEitherRequirements };
