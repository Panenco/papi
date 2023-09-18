import { expect } from 'chai';
import path from 'path';

import { BadRequest, ErrorBase, ValidationError } from '../../contracts/errors';
import { Lower } from '../../decorators/lower.decorator';
import { importClasses, stringToObject } from '../../utils/helpers';

describe('Unit tests', () => {
  describe('Util tests', () => {
    before(async () => undefined);

    it('Should import classes', async () => {
      const classes = importClasses([path.join(__dirname, '..', '..', '**', '*.js')]);

      expect(classes.length).gt(0);
      const errors = importClasses([path.join(__dirname, '..', '..', '**', '*.error.js')]);
      const instances = errors.filter(e => e !== ErrorBase && e != ValidationError).map(e => new e('reason', 'message'));
      instances.forEach(e => {
        expect(e instanceof Error).true;
        expect((e as ErrorBase).reason).equal('reason');
        expect((e as ErrorBase).message).equal('message');
      });
    });

    it('Should get decorators', async () => {
      const lowerDecorator = Lower();
      const t = lowerDecorator({ value: 'TEST' }, 't');
      expect(lowerDecorator).not.undefined;
    });

    it('Should convert string to object', () => {
      expect(stringToObject('lol.test', 't')).to.deep.equal({ lol: { test: 't' } });
    });

    it('Error without reason should get constructor name', () => {
      const t = new BadRequest(undefined, 'test');
      expect(t.reason).equal('BadRequest');
    });
  });
});
