import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

@Exclude()
export class ValidationErrorRepresentation {
  @Expose()
  @IsNotEmpty()
  public errors: any;
}
