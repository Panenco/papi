import { plainToClass } from 'class-transformer';
import { Action } from 'routing-controllers';
import { ClassType } from 'utils/types/classType';

export const representer = <T>(representationType: ClassType<T>) => (_: Action, content: any | [any[], number]) => {
  return plainToClass(representationType, (content as any).toJSON?.() ?? content, {
    exposeUnsetFields: false,
  });
};
