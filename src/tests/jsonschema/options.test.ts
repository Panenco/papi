import { expect } from 'chai';
import {
  getFromContainer,
  IS_STRING,
  IsDefined,
  IsEmail,
  IsOptional,
  IsString,
  MAX_LENGTH,
  MaxLength,
  MetadataStorage,
  ValidateNested,
} from 'class-validator';
import _get from 'lodash.get';
import { SchemaObject } from 'openapi3-ts';

import { validationMetadatasToSchemas } from '../../index.js';

describe('JSONSchema tests', () => {
  let defaultSchemas: Record<string, SchemaObject>;
  before(() => {
    class User1 {
      @IsDefined()
      @IsString()

      id: string

      @IsEmail() email: string

      @IsOptional()
      @MaxLength(20, { each: true })
      tags: string[]
    }

    // @ts-ignore: not referenced
    class Post1 {
      @IsOptional()
      @ValidateNested()
      User1: User1
    }
    const metadata = _get(getFromContainer(MetadataStorage), 'validationMetadatas')

    defaultSchemas = validationMetadatasToSchemas(metadata)
  })
  it('sets default refPointerPrefix', () => {
    expect(defaultSchemas.Post1.properties!.User1).eql({
      $ref: '#/definitions/User1',
    })
  })

  it('handles refPointerPrefix option', () => {

    const schemas = validationMetadatasToSchemas({
      refPointerPrefix: '#/components/schema/',
    })

    expect(schemas.Post1.properties!.User1).eql({
      $ref: '#/components/schema/User1',
    })
  })

  it('overwrites default converters with additionalConverters', () => {
    expect(defaultSchemas.User1.properties).eql({
      email: { format: 'email', type: 'string' },
      id: {
        type: 'string',
        not: { type: 'null' },
      },
      tags: {
        items: { type: 'string', maxLength: 20 },
        type: 'array',
      },
    })

    const schemas = validationMetadatasToSchemas({
      additionalConverters: {
        [IS_STRING]: {
          description: 'A string value',
          type: 'string',
        },
        [MAX_LENGTH]: (meta) => ({
          exclusiveMaximum: true,
          maxLength: meta.constraints[0] + 1,
          type: 'string',
        }),
      },
    })

    expect(schemas.User1.properties).eql({
      email: { format: 'email', type: 'string' },
      id: {
        description: 'A string value',
        type: 'string',
        not: { type: 'null' },
      },
      tags: {
        items: { exclusiveMaximum: true, type: 'string', maxLength: 21 },
        type: 'array',
      },
    })
  })

  it('handles required properties as per skipMissingProperties option', () => {
    expect(defaultSchemas.User1.required).eql(['id', 'email'])
    expect(defaultSchemas.Post1).not.haveOwnProperty('required')

    const schemas = validationMetadatasToSchemas({
      skipMissingProperties: true,
    })
    expect(schemas.User1.required).eql(['id'])
    expect(defaultSchemas.Post1).not.haveOwnProperty('required')
  })
})
