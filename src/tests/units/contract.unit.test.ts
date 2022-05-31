import { expect } from 'chai';
import { Exclude, Expose, plainToInstance } from 'class-transformer';
import { IsString } from 'class-validator';

import { ConditionalExpose } from '../../decorators/conditionalExpose.decorator';
import { Date } from '../../decorators/date.decorator';
import { DefaultValue } from '../../decorators/defaultValue.decorator';
import { Lower } from '../../decorators/lower.decorator';
import { Nested } from '../../decorators/nested.decorator';
import { Numeric } from '../../decorators/numeric.decorator';
import { TransformBooleanString } from '../../decorators/transformBooleanString.decorator';

@Exclude()
class NestedContract {
  @Expose()
  @IsString()
  public val: string;

  @ConditionalExpose(x => !!x.val)
  @IsString()
  public exposed: string;

  @ConditionalExpose(x => !x.val)
  @IsString()
  public notExposed: string;
}

@Exclude()
class TransformationContract {
  @Expose()
  @Date()
  public date: Date;

  @Expose()
  @DefaultValue('test')
  public default: string;

  @Expose()
  @DefaultValue(() => 'testFn')
  public defaultFn: string;

  @Expose()
  @DefaultValue('none')
  public defaultExist: string;

  @Expose()
  @Numeric()
  public num: number;

  @Expose()
  @TransformBooleanString()
  public bool: boolean;

  @Expose()
  @Lower()
  public lower: string;

  @Expose()
  @Nested(NestedContract)
  public nested: NestedContract;
}

describe('Unit tests', () => {
  describe('Contract tests', () => {
    before(async () => {});

    it('Transform custom decorators - Should correctly transform', async () => {
      const res = plainToInstance(TransformationContract, {
        date: '2020-01-01',
        defaultExist: 'test',
        num: '5',
        bool: 'True',
        lower: 'TEST',
        nested: { val: 'value', exposed: 'exposed', notExposed: 'notExposed' },
      });
      expect(res.date.toISOString()).equal('2020-01-01T00:00:00.000Z');
      expect(res.default).equal('test');
      expect(res.defaultFn).equal('testFn');
      expect(res.defaultExist).equal('test');
      expect(res.defaultExist).equal('test');
      expect(res.num).equal(5);
      expect(res.bool).equal(true);
      expect(res.lower).equal('test');
      expect(res.nested.exposed).equal('exposed');
      expect(res.nested.notExposed).undefined;
    });
  });
});
