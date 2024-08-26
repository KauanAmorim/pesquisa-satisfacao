import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pergunta } from '../../database/entities/pergunta.entity';
import { PerguntaController } from './controllers/pergunta.controller';
import { AbstractPerguntaRepository } from './abstract/pergunta.abstract.repository';
import { PerguntaRepository } from './repositories/pergunta.repository';
import { AbstractPerguntaService } from './abstract/pergunta.abstract.service';
import { PesquisaService } from '../pesquisa/services/pesquisa.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pergunta])],
  controllers: [PerguntaController],
  providers: [
    {
      provide: AbstractPerguntaRepository,
      useClass: PerguntaRepository
    },
    {
      provide: AbstractPerguntaService,
      useClass: PesquisaService
    }
  ],
})
export class PerguntaModule {}
