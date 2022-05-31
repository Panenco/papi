import { expect } from 'chai';
import { plainToInstance } from 'class-transformer';

import { validator } from '../../utils/helpers/validator';
import { ValidationBody } from '../resources/api';
import { expectThrowsAsync } from '../utils/expectThrowsAsync';

describe('Unit tests', () => {
  describe('Middleware tests', () => {
    before(async () => {});

    it('Should validate', async () => {
      const input = plainToInstance(ValidationBody, { val: 'short' });
      await validator(input);
    });

    it('Should have validation errors', async () => {
      const input = plainToInstance(ValidationBody, { val: 'sh' });
      const error = await expectThrowsAsync(validator(input), 'Error while validating body', 'ValidationError');
      expect(error.payload.errors.val[0]).eq('val must be longer than or equal to 3 characters');
    });
  });
});
