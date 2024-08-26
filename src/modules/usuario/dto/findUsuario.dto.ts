import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export enum Genero {
  masculino = 'masculino',
  feminino = 'feminino',
}

export class FindUsuarioDto {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  id?: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  cpf?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  nome?: string;

  @ApiProperty()
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  data_nascimento?: Date;

  @ApiProperty()
  @IsEnum(Genero)
  @IsOptional()
  genero?: 'masculino' | 'feminino';
}
