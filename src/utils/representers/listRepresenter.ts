import { plainToClass } from 'class-transformer';
import { createListRepresentation, ListRepresentation } from 'contracts';
import { Action } from 'routing-controllers';
import { ClassType } from 'utils';

export const listRepresenter = <T>(representationType: ClassType<T>) => (_: Action, content: [any[], number]) => {
  const [items, count] = content;
  const objects = items.map(item => item.toJSON?.() ?? item);
  const representation = new ListRepresentation(count, objects);
  const listRepresentation = createListRepresentation(representationType);
  return plainToClass(listRepresentation, representation, { exposeUnsetFields: false });
};
