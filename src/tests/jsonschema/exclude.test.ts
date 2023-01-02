// tslint:disable:no-submodule-imports
import { expect } from 'chai';
import { Exclude } from 'class-transformer';
import { Allow, IsOptional, IsString } from 'class-validator';

import { validationMetadatasToSchemas } from '../../index.js';

const { defaultMetadataStorage } = require('class-transformer/cjs/storage')

describe('Exclude() decorator', () => {
  before(() => {
    class Parent4 {
      @Allow()
      inherited: unknown

      @Exclude()
      @Allow()
      inheritedInternal: unknown

      @Allow()
      excludedInUser: unknown
    }

    // @ts-ignore unused
    class User4 extends Parent4 {
      @IsString()
      id: string

      @Exclude()
      @Allow()
      internal: unknown

      @Exclude()
      @IsOptional()
      excludedInUser: unknown
    }
  })
  it('omits Exclude()-decorated properties from output schema', () => {
    const schema = validationMetadatasToSchemas({
      classTransformerMetadataStorage: defaultMetadataStorage,
    })

    expect(schema.Parent4).eql({
      properties: {
        excludedInUser: {},
        inherited: {},
      },
      type: 'object',
      required: ['inherited', 'excludedInUser'],
    });
    expect(schema.User4).eql({
      properties: {
        id: { type: 'string' },
        inherited: {},
      },
      type: 'object',
      required: ['id', 'inherited'],
    });
  })
})
