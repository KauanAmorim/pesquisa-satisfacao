import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Pesquisa } from './pesquisa.entity';
import { Usuario } from './usuario.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'pergunta_resposta' })
export class UsuarioPesquisa {
  @ApiProperty()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty()
  @Column({ type: 'int' })
  idUsuario: number;

  @ApiProperty()
  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'idUsuario' })
  usuario: Usuario;

  @ApiProperty()
  @Column({ type: 'int' })
  idPesquisa: number;

  @ApiProperty()
  @ManyToOne(() => Pesquisa)
  @JoinColumn({ name: 'idPesquisa' })
  pesquisa: Pesquisa;
}
