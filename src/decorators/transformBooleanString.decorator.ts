import { Transform } from 'class-transformer';

export const TransformBooleanString = () => {
  return Transform(target => (target?.value?.toString() as string)?.toLowerCase() === true.toString());
};
