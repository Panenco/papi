import { expect } from 'chai';
import {
  getMetadataStorage,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

import { validationMetadatasToSchemas } from '../../index.js';
import { IStorage } from '../../jsonschema/options.js';

@ValidatorConstraint()
export class CustomTextLength implements ValidatorConstraintInterface {
  validate(text: string, validationArguments: ValidationArguments) {
    const [min, max] = validationArguments.constraints
    return text.length > min && text.length < max
  }
}

describe('custom validation classes', () => {
  let schemas;
  before(() => {
    // @ts-ignore: not referenced
    class Post6 {
      @Validate(CustomTextLength, [0, 11])
      title: string
    }

    // @ts-ignore: not referenced
    class InvalidPost6 {
      @Validate(CustomTextLength, [0, 11])
      titleNumber: number

      @Validate(CustomTextLength, [0, 11])
      titleBoolean: boolean
    }
    schemas = validationMetadatasToSchemas({
      classValidatorMetadataStorage: getMetadataStorage() as unknown as IStorage,
    })
  })
  it('uses property type if no additional converter is supplied', () => {

    expect(schemas.Post6).eql({
      properties: {
        title: { type: 'string' },
      },
      required: ['title'],
      type: 'object',
    })

    expect(schemas.InvalidPost6).eql({
      properties: {
        titleBoolean: { type: 'boolean' },
        titleNumber: { type: 'number' },
      },
      required: ['titleNumber', 'titleBoolean'],
      type: 'object',
    })
  })

  it('uses additionalConverter to generate schema when supplied', () => {
    const schemas = validationMetadatasToSchemas({
      additionalConverters: {
        CustomTextLength: (meta) => ({
          maxLength: meta.constraints[1] - 1,
          minLength: meta.constraints[0] + 1,
          type: 'string',
        }),
      },
    })

    expect(schemas.Post6).eql({
      properties: {
        title: { maxLength: 10, minLength: 1, type: 'string' },
      },
      required: ['title'],
      type: 'object',
    })
  })
})
