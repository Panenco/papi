import { Exclude, Expose } from 'class-transformer';
import { IsString, MinLength } from 'class-validator';
import { JsonController, Post } from 'routing-controllers';

import { ErrorRepresentation } from '../../contracts/representations';
import { Body } from '../../decorators/body.decorator';
import { Query } from '../../decorators/query.decorator';
import { Representer } from '../../decorators/representer.decorator';

@Exclude()
export class ValidationBody {
  @Expose()
  @IsString()
  @MinLength(3)
  public val: string;
}

@JsonController('/tests')
export class DevController {
  @Post('/validations')
  @Representer(ErrorRepresentation)
  validate(@Body() body: ValidationBody): ErrorRepresentation {
    return {
      message: body.val,
      reason: 'test',
    };
  }

  @Post('/empty')
  @Representer(null)
  empty(@Query(ValidationBody) query: ValidationBody) {
    return null;
  }
}
