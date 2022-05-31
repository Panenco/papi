import { Exclude, Expose } from 'class-transformer';
import { Nested, Numeric } from 'decorators';
import { ClassType } from 'utils';

/**
 * Output DTO for paginated lists
 *
 * @category Contract
 */
export class ListRepresentation<T> {
  public count: number;
  public items: T[];

  constructor(count: number, items: T[]) {
    this.count = count;
    this.items = items;
  }
}

/**
 * Output DTO for paginated lists. In order to generate the correct metadata for the validation and API documentation for the list schema we need to generate the class with the class type of the child DTO of the list.
 * This function can be used in combination with the representer. But a shorthand [[listRepresenter]] als o exists.
 * @param type The class type of a single list item
 * @returns The class type of a list representation with the necessary metadata for the items array. Similar to [[ListRepresentation<TChild>]] but with metadata.
 *
 * @category Contract
 */
export const createListRepresentation = <TChild>(type: ClassType<TChild>): ClassType<ListRepresentation<TChild>> => {
  const name = `${type.name}ListRepresentation`;

  @Exclude()
  class ListRepresentationFactory {
    @Expose()
    @Numeric()
    public count: number;

    @Expose()
    @Nested(type, true)
    public items: TChild[];
  }

  Object.defineProperty(ListRepresentationFactory, 'name', { value: name });

  return ListRepresentationFactory;
};
