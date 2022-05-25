import { plainToClass } from 'class-transformer';
import { Action } from 'routing-controllers';
import { ClassType } from 'utils';

/**
 * @internal
 * Helper to be used on routing-controllers middleware {@link UseBefore} {@link UseAfter}
 *
 * Apply representation transformation on a given input.
 * @param representationType class type of the representation to be used by class-transformer {@link plainToClass}
 */

export const arrayRepresenter = <T>(representationType: ClassType<T>) => (_: Action, content: any[]) => {
  const objects = content.map(item => item.toJSON?.() ?? item);
  return plainToClass(representationType, objects, { exposeUnsetFields: false });
};
