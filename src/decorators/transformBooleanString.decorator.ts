import { Transform } from 'class-transformer';

/**
 * Transformation decorator
 *
 * Transforms string boolean into JS boolean.
 *
 * @category Decorator
 */
export const TransformBooleanString = () => {
  return Transform(target => (target?.value?.toString() as string)?.toLowerCase() === true.toString());
};
