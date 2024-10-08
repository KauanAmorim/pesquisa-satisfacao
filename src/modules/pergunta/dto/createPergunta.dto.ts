import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreatePerguntaDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  pergunta: string;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  ativo: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  obrigatorio: boolean;
}