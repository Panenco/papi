import { Expose, Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

/**
 * Extended version of [[class-transformer]][[Expose]] decorator where a condition can be passed to optionally return the property this is applied on.
 *
 * @param condition Condition to Expose the property. With argument the complete current object.
 */
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
