import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

/**
 * Unrestricted Output DTO for Input Validation Errors
 *
 * @category Contract
 */
@Exclude()
export class ValidationErrorRepresentation {
  @Expose()
  @IsNotEmpty()
  public errors: any;
}
