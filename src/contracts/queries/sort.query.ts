import { QueryOrder } from '@mikro-orm/core';
import { Exclude, Expose } from 'class-transformer';
import { IsEnum, IsOptional, IsString } from 'class-validator';

import { PagingQuery } from './paging.query';

/**
 * Base query validator for a sortable paged list
 */
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
