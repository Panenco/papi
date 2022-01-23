import { plainToClass } from 'class-transformer';
import { Action } from 'routing-controllers';
import { ClassType } from 'utils';

/**
 * Helper to be used on [[routing-controllers]] middleware (UseBefore, `UseAfter`)
 *
 * Apply representation transformation on a given input.
 * @param representationType class type of the representation to be used by `[[class-transformer]]`
 */

export const arrayRepresenter = <T>(representationType: ClassType<T>) => (_: Action, content: any[]) => {
  const objects = content.map(item => item.toJSON?.() ?? item);
  return plainToClass(representationType, objects, { exposeUnsetFields: false });
};
