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

@Entity({ name: 'pesquisa' })
export class Pesquisa {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'string' })
  nome: string;

  @Column({ type: 'boolean' })
  ativo: boolean;

  @Column({ type: 'int' })
  id_usuario: number;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'idUsuario' })
  usuario: Usuario;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
