// tslint:disable:no-submodule-imports
import { expect } from 'chai';
import {
  ArrayMaxSize,
  ArrayNotContains,
  getFromContainer,
  IsEmpty,
  IsMongoId,
  MaxLength,
  MetadataStorage,
} from 'class-validator';
import _get from 'lodash.get';

import { JSONSchema } from '../../decorators/JSONSchema.decorator.js';
import { validationMetadatasToSchemas } from '../../jsonschema/index.js';


describe('decorators', () => {
  let schemas;
  beforeEach(() => {


    @JSONSchema({
      deprecated: true,
      description: 'A User6 object',
      example: { id: '123' },
    })
    // @ts-ignore: not referenced
    class User6 {
      @JSONSchema({
        default: '1',
        description: 'User6 ID',
        pattern: '.*',
      })
      @IsMongoId()
      id: string

      @MaxLength(20, { each: true })
      @ArrayMaxSize(5)
      @JSONSchema({
        items: { description: 'Tag string' },
      })
      @ArrayNotContains(['admin'])
      tags?: string[]

      @JSONSchema(() => ({
        anyOf: [{ type: 'null' }, { type: 'string', const: '' }],
      }))
      @IsEmpty()
      empty?: string
    }

    const metadata = _get(getFromContainer(MetadataStorage), 'validationMetadatas')
    schemas = validationMetadatasToSchemas(metadata)
  })
  it('merges class-level schema keywords from decorator value', () => {
    expect(schemas.User6.deprecated).true;
    expect(schemas.User6.description).eql('A User6 object')
    expect(schemas.User6.example).eql({ id: '123' })
    expect(schemas.User6.required).eql(['id', 'tags'])
    expect(schemas.User6.type).eql('object')
  })

  it('merges property-level schema keywords from decorator value', () => {
    expect(schemas.User6.properties).eql({
      empty: {
        anyOf: [{ type: 'null' }, { type: 'string', const: '' }],
      },
      id: {
        default: '1',
        description: 'User6 ID',
        pattern: '.*',
        type: 'string',
      },
      tags: {
        items: {
          description: 'Tag string',
          maxLength: 20,
          not: {
            anyOf: [{ enum: ['admin'], type: 'string' }],
          },
          type: 'string',
        },
        maxItems: 5,
        type: 'array',
      },
    })
  })
})
