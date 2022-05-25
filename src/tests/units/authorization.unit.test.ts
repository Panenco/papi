import { Request } from 'express';

import { handleRequirements } from '../../authorization/handleRequirements';
import { IRequirement } from '../../authorization/requirement.interface';
import { expectThrowsAsync } from '../utils/expectThrowsAsync';

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
  });
});
