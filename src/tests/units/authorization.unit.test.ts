import { expect } from 'chai';
import { Request } from 'express';
import { Action } from 'routing-controllers';

import { createAccessToken } from '../../authorization/accessTokens';
import { getAuthenticator } from '../../authorization/authenticator';
import { handleRequirements } from '../../authorization/handleRequirements';
import { IRequirement } from '../../authorization/requirement.interface';
import { expectThrowsAsync } from '../utils/expectThrowsAsync';
import { MockRequest } from '../utils/mockRequest';

const succeedingRequirement: IRequirement = (r: Request) => new Promise(res => setTimeout(res, 1));
const failingRequirement: IRequirement = (r: Request) => new Promise((res, rej) => setTimeout(x => rej('failed'), 1));

describe('Unit tests', () => {
  describe('Authorization tests', () => {
    before(async () => {});

    it('Handle requirement - Should fail on single failure', async () => {
      await expectThrowsAsync(
        handleRequirements([[succeedingRequirement, failingRequirement]], null),
        null,
        'forbidden',
      );
    });

    it('Handle requirement - Should fail on failing requirement', async () => {
      await expectThrowsAsync(handleRequirements(failingRequirement, null), null, 'forbidden');
    });

    it('Handle requirement - Should succeed when one succeeds', async () => {
      await handleRequirements([succeedingRequirement, failingRequirement], null);
    });

    it('Handle requirement - Should succeed on succeeding requirement', async () => {
      await handleRequirements(succeedingRequirement, null);
    });

    it('Auth flow - Should succeed with valid secret and token', async () => {
      const secret = 'secret';
      const authenticator = getAuthenticator(secret);
      const token = await createAccessToken(secret, 10, { test: 'test' });
      const request = new MockRequest();
      request.headers['x-auth'] = token.token;
      await authenticator({ request } as Action, succeedingRequirement);
      expect(request.token.test).to.equal('test');
    });

    it('Auth flow - Should fail with failing requirement', async () => {
      const secret = 'secret';
      const authenticator = getAuthenticator(secret);
      const token = await createAccessToken(secret, 10, {});
      const request = new MockRequest();
      request.headers['x-auth'] = token.token;
      await expectThrowsAsync(authenticator({ request } as Action, failingRequirement), null, 'forbidden');
    });

    it('Auth flow - Should fail with invalid secret', async () => {
      const secret = 'secret';
      const authenticator = getAuthenticator(secret);
      const token = await createAccessToken('invalid secret', 10, {});
      const request = new MockRequest();
      request.headers['x-auth'] = token.token;
      await expectThrowsAsync(
        authenticator({ request } as Action, failingRequirement),
        'Invalid token',
        'invalidAccessToken',
      );
    });

    it('Auth flow - Should fail with missing token', async () => {
      const secret = 'secret';
      const authenticator = getAuthenticator(secret);
      const request = new MockRequest();
      await expectThrowsAsync(
        authenticator({ request } as Action, failingRequirement),
        'Invalid token',
        'invalidToken',
      );
    });
  });
});
