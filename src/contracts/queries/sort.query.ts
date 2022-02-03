import { Exclude, Expose } from 'class-transformer';
import { IsEnum, IsOptional, IsString } from 'class-validator';

import { QueryOrder } from '../enum/queryOrder.enum';
import { PagingQuery } from './paging.query';

@Exclude()
export class SortQuery extends PagingQuery {
  @Expose()
  @IsString()
  @IsOptional()
  public sort?: string;

  @Expose()
  @IsEnum(QueryOrder)
  @IsOptional()
  public direction?: QueryOrder;
}
