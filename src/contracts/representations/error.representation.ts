import { Exclude, Expose } from 'class-transformer';
import { IsString } from 'class-validator';
import { ErrorBase } from 'contracts/errors';

@Exclude()
export class ErrorRepresentation {
  @Expose()
  @IsString()
  public message: string;

  @Expose()
  @IsString()
  public reason: string;

  constructor(error?: ErrorBase) {
    if (!error) {
      return;
    }
    this.message = error.message;
    this.reason = error.reason;
  }
}
