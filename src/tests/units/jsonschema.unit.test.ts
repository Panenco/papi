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

import { validationMetadatasToSchemas } from '../../index.js';

class User {
  @IsDefined()
  @IsString()
  id: string;

  @IsEmail() email: string;

  @IsOptional()
  @MaxLength(20, { each: true })
  tags: string[];
}

// @ts-ignore: not referenced
class Post {
  @IsOptional()
  @ValidateNested()
  user: User;
}

const metadata = _get(getFromContainer(MetadataStorage), 'validationMetadatas');
const defaultSchemas = validationMetadatasToSchemas(metadata);

describe('Unit tests', () => {
  describe('jsonschema tests', () => {
    before(async () => {});

    it('sets default refPointerPrefix', () => {
      expect(defaultSchemas.Post.properties!.user).eql({
        $ref: '#/definitions/User',
      });
    });

    it('handles refPointerPrefix option', () => {
      const schemas = validationMetadatasToSchemas({
        refPointerPrefix: '#/components/schema/',
      });

      expect(schemas.Post.properties!.user).eql({
        $ref: '#/components/schema/User',
      });
    });

    it('overwrites default converters with additionalConverters', () => {
      expect(defaultSchemas.User.properties).eql({
        email: { format: 'email', type: 'string' },
        id: {
          type: 'string',
          not: { type: 'null' },
        },
        tags: {
          items: { type: 'string', maxLength: 20 },
          type: 'array',
        },
      });

      const schemas = validationMetadatasToSchemas({
        additionalConverters: {
          [IS_STRING]: {
            description: 'A string value',
            type: 'string',
          },
          [MAX_LENGTH]: meta => ({
            exclusiveMaximum: true,
            maxLength: meta.constraints[0] + 1,
            type: 'string',
          }),
        },
      });

      expect(schemas.User.properties).eql({
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
      });
    });

    it('handles required properties as per skipMissingProperties option', () => {
      expect(defaultSchemas.User.required).eql(['id', 'email']);
      expect(defaultSchemas.Post).not.haveOwnProperty('required');

      const schemas = validationMetadatasToSchemas({
        skipMissingProperties: true,
      });
      expect(schemas.User.required).eql(['id']);
      expect(defaultSchemas.Post).not.haveOwnProperty('required');
    });
  });
});
