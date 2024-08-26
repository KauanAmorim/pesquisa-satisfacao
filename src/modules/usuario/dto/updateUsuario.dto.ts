import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export enum Genero {
  masculino = 'masculino',
  feminino = 'feminino',
}

export class UpdateUsuarioDto {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  data_nascimento: Date;

  @ApiProperty()
  @IsEnum(Genero)
  @IsNotEmpty()
  genero: 'masculino' | 'feminino';
}
