import { Length, IsNumberString } from "class-validator";

export class Body {
  @Length(10, 10)
  @IsNumberString()
  phone: string;

  @Length(6, 20)
  password: string;
}
