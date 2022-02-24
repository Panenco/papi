import { Transform } from 'class-transformer';

export const Lower = () => {
  return Transform(({ value }) => value.toLowerCase());
};
