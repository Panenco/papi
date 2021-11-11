import { validate, ValidationError as ClassValidatorValidationError, ValidatorOptions } from 'class-validator';

import { ValidationError } from '../contracts/errors/validation.error';

export const validator = async (object: object, options?: ValidatorOptions) => {
  const validationErrors: ClassValidatorValidationError[] = await validate(object, options);

  if (validationErrors.length > 0) {
    const errors = validationErrors.reduce(map, {});

    throw new ValidationError(errors);
  }
};

const reduce = (errors: ClassValidatorValidationError[]) => {
  return errors.reduce(map, {});
};

const map = (m: any, error: ClassValidatorValidationError) => {
  m[error.property] = error.constraints ? Object.values(error.constraints) : reduce(error.children);
  return m;
};
