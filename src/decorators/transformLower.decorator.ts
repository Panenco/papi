import { Transform } from 'class-transformer';

/**
 * Transforms strings to lowercase.
 *
 * @category Decorator
 */
export const Lower = () => {
  return Transform(({ value }) => value?.toLowerCase());
};
