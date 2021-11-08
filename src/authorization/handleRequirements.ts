import { Request } from 'express';

import { promiseAny } from './promiseAny';
import { IRequirement } from './requirement.interface';

export const handleEitherRequirements = async (requirements: IRequirement | IRequirement[], request: Request) => {
  const list = Array.isArray(requirements) ? requirements : [requirements];
  await promiseAny(list.map(async requirement => requirement(request)));
};
