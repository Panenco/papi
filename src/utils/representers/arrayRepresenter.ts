import { plainToClass } from 'class-transformer';
import { Action } from 'routing-controllers';
import { ClassType } from 'utils';

export const arrayRepresenter = <T>(representationType: ClassType<T>) => (_: Action, content: any[]) => {
  const objects = content.map(item => item.toJSON?.() ?? item);
  return plainToClass(representationType, objects, { exposeUnsetFields: false });
};
