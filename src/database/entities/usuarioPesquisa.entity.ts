import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Pesquisa } from './pesquisa.entity';
import { Usuario } from './usuario.entity';

@Entity({ name: 'pergunta_resposta' })
export class UsuarioPesquisa {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int' })
  idUsuario: number;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'idUsuario' })
  usuario: Usuario;

  @Column({ type: 'int' })
  idPesquisa: number;

  @ManyToOne(() => Pesquisa)
  @JoinColumn({ name: 'idPesquisa' })
  pesquisa: Pesquisa;
}
