import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'usuario' })
export class Usuario {
  @ApiProperty()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty()
  @Column({ length: 11 })
  cpf: string;

  @ApiProperty()
  @Column({ length: 255 })
  nome: string;

  @ApiProperty()
  @Column({ length: 255 })
  email: string;

  @ApiProperty()
  @Column({ type: 'datetime' })
  data_nascimento: Date;

  @ApiProperty()
  @Column({ enum: ['masculino', 'feminino'] })
  genero: 'masculino' | 'feminino';

  @ApiProperty()
  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @ApiProperty()
  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
