import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Usuario } from './usuario.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'pesquisa' })
export class Pesquisa {
  @ApiProperty()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty()
  @Column()
  nome: string;

  @ApiProperty()
  @Column({ type: 'boolean' })
  ativo: boolean;

  @ApiProperty()
  @Column({ type: 'int' })
  id_usuario: number;

  @ApiProperty()
  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'idUsuario' })
  usuario: Usuario;

  @ApiProperty()
  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
