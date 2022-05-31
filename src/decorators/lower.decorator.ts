import { Transform } from 'class-transformer';

/**
 * Transforms strings to lowercase.
 *
 * @category Decorator
 */
export const Lower = () => Transform(({ value }) => value?.toLowerCase());
