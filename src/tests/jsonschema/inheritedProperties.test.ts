// tslint:disable:no-submodule-imports
import { expect } from 'chai';
import {
  Contains,
  getFromContainer,
  IsDefined,
  IsEmail,
  IsMobilePhone,
  IsOptional,
  IsString,
  MaxLength,
  MetadataStorage,
  MinLength,
} from 'class-validator';
import _get from 'lodash.get';

import { JSONSchema, validationMetadatasToSchemas } from '../../index.js';

describe('Inheriting validation decorators', () => {
  @JSONSchema({
    description: 'Contains email, password and phone',
    summary: 'Base object',
  })
  class BaseContent {
    @JSONSchema({
      default: 'some@email.com',
    })
    @IsDefined()
    @IsEmail()
    email: string

    @JSONSchema({
      description: 'Password field',
      summary: 'Password',
    })
    @IsString()
    @IsOptional()
    password: string

    @IsDefined()
    @IsMobilePhone('fi-FI')
    phone: string
  }

  @JSONSchema({
    summary: 'User2 object',
  })
  // @ts-ignore: not referenced
  class User2 extends BaseContent {
    @MinLength(10)
    @MaxLength(20)
    name: string

    @JSONSchema({
      description: 'Password field - required!',
    })
    @MinLength(20)
    @IsDefined()
    password: string

    @JSONSchema({
      summary: 'Mobile phone number',
    })
    @IsOptional()
    phone: string

    @Contains('hello') welcome: string
  }


  let metadatas;
  before(() => {
    metadatas = _get(getFromContainer(MetadataStorage), 'validationMetadatas')
  })
  it('inherits and merges validation decorators from parent class', () => {
    const schemas = validationMetadatasToSchemas(metadatas)

    expect(schemas.BaseContent).eql({
      description: 'Contains email, password and phone',
      properties: {
        email: {
          default: 'some@email.com',
          format: 'email',
          type: 'string',
          not: { type: 'null' },
        },
        password: {
          description: 'Password field',
          summary: 'Password',
          type: 'string',
        },
        phone: {
          format: 'mobile-phone',
          type: 'string',
          not: { type: 'null' },
        },
      },
      required: ['email', 'phone'],
      summary: 'Base object',
      type: 'object',
    })

    expect(schemas.User2).eql({
      properties: {
        email: {
          default: 'some@email.com',
          format: 'email',
          type: 'string',
          not: { type: 'null' },
        },
        name: {
          maxLength: 20,
          minLength: 10,
          type: 'string',
        },
        password: {
          description: 'Password field - required!',
          minLength: 20,
          type: 'string',
          not: { type: 'null' },
        },
        phone: {
          format: 'mobile-phone',
          summary: 'Mobile phone number',
          type: 'string',
          not: { type: 'null' },
        },
        welcome: {
          pattern: 'hello',
          type: 'string',
        },
      },
      required: ['name', 'welcome', 'email'],
      summary: 'User2 object',
      type: 'object',
    })
  })

  it('handles inherited IsDefined decorators when skipMissingProperties is enabled', () => {
    const schemas = validationMetadatasToSchemas({
      skipMissingProperties: true,
    })

    expect(schemas.BaseContent.required).eql(['email', 'phone'])
    expect(schemas.User2.required).eql(['password', 'email'])
  })
})
