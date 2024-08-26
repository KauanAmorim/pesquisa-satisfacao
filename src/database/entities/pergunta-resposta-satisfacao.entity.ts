import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { PerguntaSatisfacao } from './pergunta-satisfacao.entity';
import { Pesquisa } from './pesquisa.entity';
import { RespotaSatisfacao } from './resposta-satisfacao.entity';

@Entity({ name: 'pergunta_satisfacao' })
export class PerguntaRespostaSatisfacao {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ type: 'int' })
  idPesquisa: number;

  @ManyToOne(() => Pesquisa)
  @JoinColumn({ name: 'idPergunta' })
  pesquisa: Pesquisa;

  @Column({ type: 'int' })
  idPergunta: number;

  @ManyToOne(() => PerguntaSatisfacao)
  @JoinColumn({ name: 'idPergunta' })
  perguntaSatisfacao: PerguntaSatisfacao;

  @Column({ type: 'int' })
  idResposta: number;

  @ManyToOne(() => RespotaSatisfacao)
  @JoinColumn({ name: 'idResposta' })
  respostaSatisfacao: RespotaSatisfacao;
}
