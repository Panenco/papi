import { ClassType } from '@panenco/pantils';
import { Exclude, Expose } from 'class-transformer';

import { nested, numeric } from './decorators';

export class ListRepresentation<T> {
  public count: number;
  public items: T[];

  constructor(count: number, items: T[]) {
    this.count = count;
    this.items = items;
  }
}

export const createListRepresentation = <T>(
  type: ClassType<T>
): ClassType<ListRepresentation<T>> => {
  const name = type.name.replace("Representation", ListRepresentation.name);

  @Exclude()
  class ListRepresentationFactory {
    @Expose()
    @numeric()
    public count: number;

    @Expose()
    @nested(type, true)
    public items: T[];
  }

  Object.defineProperty(ListRepresentationFactory, "name", { value: name });

  return ListRepresentationFactory;
};
