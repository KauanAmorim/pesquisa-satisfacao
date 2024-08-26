import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RespostaController } from './controllers/resposta.controller';
import { AbstractRespostaRepository } from './abstract/resposta.abstract.repository';
import { RespostaRepository } from './repositories/resposta.repository';
import { AbstractRespostaService } from './abstract/resposta.abstract.service';
import { RespostaService } from './services/pergunta.service';
import { Resposta } from '../../database/entities/resposta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Resposta])],
  controllers: [RespostaController],
  providers: [
    {
      provide: AbstractRespostaRepository,
      useClass: RespostaRepository
    },
    {
      provide: AbstractRespostaService,
      useClass: RespostaService
    }
  ],
})
export class PerguntaModule {}
