import { Request } from 'express';

import { Forbidden } from '../contracts/errors/forbidden.error';
import { IRequirement } from './requirement.interface';

export const handleEitherRequirements = async (requirements: IRequirement | IRequirement[], request: Request) => {
  const list = Array.isArray(requirements) ? requirements : [requirements];

  const functionsToValidate = list.map(requirement => () => requirement(request));
  await promiseAny(functionsToValidate);
};

const promiseAny = async (functionsToValidate: ((() => Promise<void>) | (() => void))[]) => {
  const errors = [];

  await new Promise((res, rej) => {
    functionsToValidate.map(async validationFunc => {
      try {
        const v = await validationFunc();
        res(v);
      } catch (error) {
        errors.push(error);
        if (errors.length !== functionsToValidate.length) return;
        rej(new Forbidden('forbidden', errors.map(e => e.reason).join(', ')));
      }
    });
  });
};
