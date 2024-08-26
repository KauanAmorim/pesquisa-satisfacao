import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Pergunta } from './pergunta.entity';
import { Pesquisa } from './pesquisa.entity';
import { Resposta } from './resposta.entity';

@Entity({ name: 'pergunta_resposta' })
export class PerguntaResposta {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ type: 'int' })
  idPesquisa: number;

  @ManyToOne(() => Pesquisa)
  @JoinColumn({ name: 'idPergunta' })
  pesquisa: Pesquisa;

  @Column({ type: 'int' })
  idPergunta: number;

  @ManyToOne(() => Pergunta)
  @JoinColumn({ name: 'idPergunta' })
  pergunta: Pergunta;

  @Column({ type: 'int' })
  idResposta: number;

  @ManyToOne(() => Resposta)
  @JoinColumn({ name: 'idResposta' })
  resposta: Resposta;
}
