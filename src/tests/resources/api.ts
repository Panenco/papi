import { Exclude, Expose } from 'class-transformer';
import { IsOptional, IsString, MinLength } from 'class-validator';
import { Get, JsonController, Post } from 'routing-controllers';

import { Body } from '../../decorators/body.decorator';
import { Lower } from '../../decorators/lower.decorator';
import { Query } from '../../decorators/query.decorator';
import { ArrayRepresenter, ListRepresenter, Representer } from '../../decorators/representer.decorator';

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

  @Expose()
  @Lower()
  @IsOptional()
  public lower?: string;
}

@JsonController('/tests')
export class ApiController {
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
      lower: 'UPPER',
    });
  }

  @Get('/empty')
  @Representer(null)
  empty(@Query() query: ValidationBody): void {
    return null;
  }

  @Get('/list')
  @ListRepresenter(SimpleResponse)
  list() {
    return [
      [
        {
          res: 'response',
          lower: 'UPPER case',
          stripped: 'stripped',
        },
      ],
      10,
    ];
  }

  @Get('/array')
  @ArrayRepresenter(SimpleResponse)
  array() {
    return [
      {
        res: 'response',
        stripped: 'stripped',
      },
    ];
  }
}
