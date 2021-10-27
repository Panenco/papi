import { Transform } from 'class-transformer';

export const transformBooleanString = () => {
  return Transform(
    (target) =>
      (target?.value?.toString() as string)?.toLowerCase() === true.toString()
  );
};
