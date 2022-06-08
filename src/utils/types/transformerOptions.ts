import { ClassTransformOptions } from 'class-transformer';

/**
 * Body/Query decorator parameters.
 */
export interface InputOptions {
  /**
   * Class-transformer options used to perform plainToClass operation.
   *
   * @see https://github.com/pleerock/class-transformer
   */
  transform?: ClassTransformOptions;
  /**
   * Extra options to be passed to body-parser middleware.
   */
  options?: any;
}

/**
 * Options to be passed during transformation.
 * @inheritdoc
 */
export interface TransformOptions extends ClassTransformOptions {
  /**
   * When set to true, fields with `undefined` as value will be included in class to plain transformation. Otherwise
   * those fields will be omitted from the result.
   *
   * DEFAULT: `false`
   */
  exposeUnsetFields?: boolean;
}
