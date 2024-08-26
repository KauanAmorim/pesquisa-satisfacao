import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateRespostaDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  resposta: string;
}