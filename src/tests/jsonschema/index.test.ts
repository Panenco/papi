// tslint:disable:no-submodule-imports
import { expect } from 'chai';
import {
  Allow,
  ArrayMaxSize,
  ArrayNotContains,
  IsBoolean,
  IsEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  Length,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { ValidationMetadata } from 'class-validator/types/metadata/ValidationMetadata';

import { targetConstructorToSchema, validationMetadatasToSchemas } from '../../jsonschema/index.js';
import { IStorage } from '../../jsonschema/options.js';

describe('classValidatorConverter', () => {
  class User3 {
    @IsString() id: string

    @MinLength(5)
    firstName: string

    @IsOptional()
    @MaxLength(20, { each: true })
    @ArrayMaxSize(5)
    @ArrayNotContains(['admin'])
    tags: string[]

    @IsEmpty() empty: string

    @IsObject() object: object

    @IsNotEmptyObject()
    @IsOptional()
    nonEmptyObject: {}

    @Allow()
    any: unknown
  }
  class Post3 {
    static schemaName = 'ChangedPost3'

    @IsOptional()
    @ValidateNested()
    User3: User3

    @Length(2, 100)
    @IsOptional()
    title: string

    @IsBoolean()
    @IsOptional()
    published: true
  }

  it('handles empty metadata', () => {
    const emptyStorage: any = {
      constraintMetadatas: new Map(),
      validationMetadatas: new Map(),
    }

    expect(
      validationMetadatasToSchemas({
        classValidatorMetadataStorage: emptyStorage,
      })
    ).eql({})
  })

  it('derives schema from property type when no converter is found', () => {
    const customMetadata: ValidationMetadata = {
      always: false,
      constraintCls: () => undefined,
      constraints: [],
      each: false,
      groups: [],
      message: '',
      propertyName: 'id',
      target: User3,
      type: 'NON_EXISTENT_METADATA_TYPE',
      validationTypeOptions: {},
    }

    const storage: Partial<IStorage> = {
      constraintMetadatas: new Map(),
      validationMetadatas: new Map([[User3, [customMetadata]]]),
    }

    const schemas = validationMetadatasToSchemas({
      classValidatorMetadataStorage: storage as any,
    })
    expect(schemas.User3.properties!.id).eql({ type: 'string' })
  })

  it('combines converted class-validator metadata into JSON Schemas', () => {
    const schemas = validationMetadatasToSchemas()
    expect(schemas.Post3).eql({
      properties: {
        published: {
          type: 'boolean',
        },
        title: {
          maxLength: 100,
          minLength: 2,
          type: 'string',
        },
        User3: {
          $ref: '#/definitions/User3',
        },
      },
      type: 'object',
    })
    expect(schemas.User3).eql({
      properties: {
        empty: {
          anyOf: [
            { type: 'string', enum: [''] },
            {
              not: {
                anyOf: [
                  { type: 'string' },
                  { type: 'number' },
                  { type: 'boolean' },
                  { type: 'integer' },
                  { type: 'array' },
                  { type: 'object' },
                ],
              },
              nullable: true,
            },
          ],
        },
        firstName: { minLength: 5, type: 'string' },
        id: { type: 'string' },
        object: { type: 'object' },
        nonEmptyObject: { type: 'object', minProperties: 1 },
        any: {},
        tags: {
          items: {
            maxLength: 20,
            not: {
              anyOf: [{ enum: ['admin'], type: 'string' }],
            },
            type: 'string',
          },
          maxItems: 5,
          type: 'array',
        },
      },
      required: ['id', 'firstName', 'object', 'any'],
      type: 'object',
    })

  })

  it('combines converted class-validator metadata for one object into JSON Schemas', () => {
    const Post3Schema = targetConstructorToSchema(Post3)

    expect(Post3Schema).eql({
      properties: {
        published: {
          type: 'boolean',
        },
        title: {
          maxLength: 100,
          minLength: 2,
          type: 'string',
        },
        User3: {
          $ref: '#/definitions/User3',
        },
      },
      type: 'object',
    })

    const User3Schema = targetConstructorToSchema(User3)

    expect(User3Schema).eql({
      properties: {
        empty: {
          anyOf: [
            { type: 'string', enum: [''] },
            {
              not: {
                anyOf: [
                  { type: 'string' },
                  { type: 'number' },
                  { type: 'boolean' },
                  { type: 'integer' },
                  { type: 'array' },
                  { type: 'object' },
                ],
              },
              nullable: true,
            },
          ],
        },
        firstName: { minLength: 5, type: 'string' },
        id: { type: 'string' },
        object: { type: 'object' },
        nonEmptyObject: { type: 'object', minProperties: 1 },
        any: {},
        tags: {
          items: {
            maxLength: 20,
            not: {
              anyOf: [{ enum: ['admin'], type: 'string' }],
            },
            type: 'string',
          },
          maxItems: 5,
          type: 'array',
        },
      },
      required: ['id', 'firstName', 'object', 'any'],
      type: 'object',
    })
  })

  it('should use custom schema name field', () => {
    const schemas = validationMetadatasToSchemas({
      schemaNameField: 'schemaName',
    })
    expect(schemas.ChangedPost3).eql({
      properties: {
        published: {
          type: 'boolean',
        },
        title: {
          maxLength: 100,
          minLength: 2,
          type: 'string',
        },
        User3: {
          $ref: '#/definitions/User3',
        },
      },
      type: 'object',
    });
    expect(schemas.User3).eql({
      properties: {
        empty: {
          anyOf: [
            { type: 'string', enum: [''] },
            {
              not: {
                anyOf: [
                  { type: 'string' },
                  { type: 'number' },
                  { type: 'boolean' },
                  { type: 'integer' },
                  { type: 'array' },
                  { type: 'object' },
                ],
              },
              nullable: true,
            },
          ],
        },
        firstName: { minLength: 5, type: 'string' },
        id: { type: 'string' },
        object: { type: 'object' },
        nonEmptyObject: { type: 'object', minProperties: 1 },
        any: {},
        tags: {
          items: {
            maxLength: 20,
            not: {
              anyOf: [{ enum: ['admin'], type: 'string' }],
            },
            type: 'string',
          },
          maxItems: 5,
          type: 'array',
        },
      },
      required: ['id', 'firstName', 'object', 'any'],
      type: 'object',
    });

  })
})
