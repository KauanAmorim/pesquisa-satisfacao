import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
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
  @IsNotEmpty()
  @IsOptional()
  id?: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  cpf?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nome?: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @IsOptional()
  email?: string;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  @IsOptional()
  data_nascimento?: Date;

  @ApiProperty()
  @IsEnum(Genero)
  @IsNotEmpty()
  @IsOptional()
  genero?: 'masculino' | 'feminino';
}
