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
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'pergunta_resposta' })
export class PerguntaResposta {
  @ApiProperty()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty()
  @Column({ type: 'int' })
  idPesquisa: number;

  @ApiProperty()
  @ManyToOne(() => Pesquisa)
  @JoinColumn({ name: 'idPergunta' })
  pesquisa: Pesquisa;

  @ApiProperty()
  @Column({ type: 'int' })
  idPergunta: number;

  @ApiProperty()
  @ManyToOne(() => Pergunta)
  @JoinColumn({ name: 'idPergunta' })
  pergunta: Pergunta;

  @ApiProperty()
  @Column({ type: 'int' })
  idResposta: number;

  @ApiProperty()
  @ManyToOne(() => Resposta)
  @JoinColumn({ name: 'idResposta' })
  resposta: Resposta;
}
