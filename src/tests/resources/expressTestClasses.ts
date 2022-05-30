import { Exclude, Expose } from 'class-transformer';
import { IsString, MinLength } from 'class-validator';
import { Get, JsonController, Post } from 'routing-controllers';

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

@Exclude()
export class SimpleResponse {
  @Expose()
  @IsString()
  public res: string;
}

@JsonController('/tests')
export class DevController {
  @Post('/validations')
  @Representer(SimpleResponse)
  validate(@Body() body: ValidationBody) {
    return {
      res: body.val,
      stripped: 'stripped',
    };
  }

  @Post('/asyncresponse')
  @Representer(SimpleResponse)
  async asyncResponse(): Promise<SimpleResponse> {
    return Promise.resolve({
      res: 'async test',
      stripped: 'stripped',
    });
  }

  @Get('/empty')
  @Representer(null)
  empty(@Query() query: ValidationBody): void {
    return null;
  }
}
