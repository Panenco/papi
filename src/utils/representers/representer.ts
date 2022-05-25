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
export const representer = <T>(representationType: ClassType<T>) => (_: Action, content: any | [any[], number]) => {
  return plainToClass(representationType, (content as any).toJSON?.() ?? content, {
    exposeUnsetFields: false,
  });
};
