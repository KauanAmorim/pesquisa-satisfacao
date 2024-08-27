import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerguntaResposta } from '../../database/entities/perguntaResposta.entity';
import { PerguntaRespostaController } from './controllers/perguntaResposta.controller';
import { AbstractPerguntaRespostaRepository } from './abstract/perguntaResposta.abstract.respository';
import { PerguntaRespostaRepository } from './repositories/perguntaResposta.repository';
import { AbstractPerguntaRespostaService } from './abstract/perguntaResposta.abstract.service';
import { PerguntaRespostaService } from './services/perguntaResposta.service';

@Module({
  imports: [TypeOrmModule.forFeature([PerguntaResposta])],
  controllers: [PerguntaRespostaController],
  providers: [
    {
      provide: AbstractPerguntaRespostaRepository,
      useClass: PerguntaRespostaRepository
    },
    {
      provide: AbstractPerguntaRespostaService,
      useClass: PerguntaRespostaService
    }
  ],
})
export class PerguntaRespostaModule {}
