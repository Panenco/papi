import { plainToInstance } from 'class-transformer';
import { createListRepresentation, ListRepresentation } from 'contracts';
import { Action } from 'routing-controllers';
import { ClassType } from 'utils';

/**
 * @internal
 * Helper to be used on routing-controllers middleware {@link UseBefore} {@link UseAfter}
 *
 * Apply representation transformation on a given input.
 * @param representationType class type of the representation to be used by class-transformer {@link plainToInstance}
 */
export const listRepresenter =
  <T>(representationType: ClassType<T>) =>
  (_: Action, content: [any[], number]) => {
    const [items, count] = content;
      const serializable = content as any;
    const objects = items.map(item => serializable?.toPOJO?.() ?? serializable?.toJSON?.() ?? item);
    const representation = new ListRepresentation(count, objects);
    const listRepresentation = createListRepresentation(representationType);
    return plainToInstance(listRepresentation, representation, { exposeUnsetFields: false });
  };
