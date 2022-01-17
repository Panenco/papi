import { IRequirement } from 'authorization';
import { Forbidden } from 'contracts';
import { Request } from 'express';

/**
 * Validate an array of groups of requirements where within a group all requirements need to be valid
 *
 * Example1: [[valid1, valid2], [valid3, invalid1]] => success
 *
 * Example2: [valid1, invalid1] => success
 *
 * Example3: [[valid1, invalid1]] => fail
 * @param requirements List of groups to verify
 * @param request Express request
 */
export const handleRequirements = async (
  requirements: (IRequirement | IRequirement[])[] | IRequirement,
  request: Request,
) => {
  const list = Array.isArray(requirements) ? requirements : [requirements];

  const functionsToValidate = list.map(item => async () => {
    const items = Array.isArray(item) ? item : [item];
    await Promise.all(items.map(r => r(request)));
  });
  await promiseAny(functionsToValidate);
};

const promiseAny = async (functionsToValidate: ((() => Promise<void>) | (() => void))[]) => {
  const errors = [];
  if (!functionsToValidate?.length) return;
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
