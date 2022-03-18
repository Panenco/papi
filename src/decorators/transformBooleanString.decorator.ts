import { Transform } from 'class-transformer';

/**
 * Transformation decorator
 *
 * Transforms string boolean into JS boolean.
 */
export const TransformBooleanString = () => {
  return Transform(target => (target?.value?.toString() as string)?.toLowerCase() === true.toString());
};
