// tslint:disable:no-submodule-imports
import { expect } from 'chai';
import { Type } from 'class-transformer';
import { IsString, MinLength, ValidateNested } from 'class-validator';

import { validationMetadatasToSchemas } from '../../index.js';

const { defaultMetadataStorage } = require('class-transformer/cjs/storage')

describe('classValidatorConverter', () => {
  before(() => {
    class User8 {
      @IsString()
      name: string
    }

    // @ts-ignore: not referenced
    class Post8 {
      @Type(() => {
        return String
      })
      @MinLength(2, { each: true })
      UserStatus: Map<string, string>
    }

    // @ts-ignore: not referenced
    class PostWithUsers8 {
      @ValidateNested({ each: true })
      @Type(() => User8)
      Users: Map<string, User8>
    }
  })
  it('combines converted class-validator metadata into JSON Schemas', async () => {
    const schemas = validationMetadatasToSchemas({
      classTransformerMetadataStorage: defaultMetadataStorage,
    })
    expect(schemas.User8).eql({
      properties: {
        name: {
          type: 'string',
        },
      },
      type: 'object',
      required: ['name'],
    })
    expect(schemas.Post8).eql({
      properties: {
        UserStatus: {
          additionalProperties: {
            minLength: 2,
            type: 'string',
          },
          type: 'object',
        },
      },
      type: 'object',
      required: ['UserStatus'],
    });
    expect(schemas.PostWithUsers8).eql({
      properties: {
        Users: {
          additionalProperties: {
            $ref: '#/definitions/User8',
          },
          type: 'object',
        },
      },
      type: 'object',
      required: ['Users'],
    });


  })
})
