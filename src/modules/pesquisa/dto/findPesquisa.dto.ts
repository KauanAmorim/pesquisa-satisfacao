import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class FindPesquisaDto {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  id?: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  nome?: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  ativo?: boolean;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  id_usuario?: number;
}