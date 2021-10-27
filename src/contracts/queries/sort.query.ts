import { Exclude, Expose } from 'class-transformer';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Direction } from 'contracts';

import { PagingQuery } from './paging.query';

@Exclude()
export class SortQuery extends PagingQuery {
  @Expose()
  @IsString()
  @IsOptional()
  public sort?: string;

  @Expose()
  @IsEnum(Direction)
  @IsOptional()
  public direction?: Direction;
}
