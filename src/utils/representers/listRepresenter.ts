import { plainToClass } from 'class-transformer';
import { createListRepresentation, ListRepresentation } from 'contracts';
import { Action } from 'routing-controllers';
import { ClassType } from 'utils';

/**
 * Helper to be used on [[routing-controllers]] middleware (UseBefore, `UseAfter`)
 *
 * Apply representation transformation on a given input.
 * @param representationType class type of the representation to be used by `[[class-transformer]]`
 */
export const listRepresenter = <T>(representationType: ClassType<T>) => (_: Action, content: [any[], number]) => {
  const [items, count] = content;
  const objects = items.map(item => item.toJSON?.() ?? item);
  const representation = new ListRepresentation(count, objects);
  const listRepresentation = createListRepresentation(representationType);
  return plainToClass(listRepresentation, representation, { exposeUnsetFields: false });
};
