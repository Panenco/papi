import { validate, ValidationError as ClassValidatorValidationError } from 'class-validator';

import { ValidationError } from '../errors/validationError';

export const validator = async (
  object: object,
  skipMissingProperties = false
) => {
  const validationErrors: ClassValidatorValidationError[] = await validate(
    object,
    {
      skipMissingProperties,
    }
  );

  if (validationErrors.length > 0) {
    const errors = validationErrors.reduce(map, {});

    throw new ValidationError(errors);
  }
};

const reduce = (errors: ClassValidatorValidationError[]) => {
  return errors.reduce(map, {});
};

const map = (m: any, error: ClassValidatorValidationError) => {
  m[error.property] = error.constraints
    ? Object.values(error.constraints)
    : reduce(error.children);
  return m;
};
