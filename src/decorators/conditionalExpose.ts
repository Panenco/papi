import { Expose, Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

export const ConditionalExpose = (condition: (object: any) => boolean) => {
  const expose = Expose();
  const isOptional = IsOptional();
  const transform = Transform(({ obj, value }: any) => {
    const shouldExpose = condition(obj);
    return shouldExpose ? value : undefined;
  });

  return (target: any, key: string) => {
    expose(target, key);
    isOptional(target, key);
    transform(target, key);
  };
};
