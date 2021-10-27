import { Exclude, Expose, Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { Numeric } from 'decorators';

@Exclude()
export class PagingQuery {
  @Expose()
  @IsOptional()
  @Numeric()
  @Transform(({ value }) => value || 0)
  public offset?: number = 0;

  @Expose()
  @IsOptional()
  @Numeric()
  @Transform(({ value }) => value || 20)
  public limit?: number = 20;
}
