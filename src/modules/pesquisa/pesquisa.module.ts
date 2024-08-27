import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pesquisa } from '../../database/entities/pesquisa.entity';
import { PesquisaController } from './controllers/pesquisa.controller';
import { AbstractPesquisaRepository } from './abstract/pesquisa.abstract.repository';
import { PesquisaRepository } from './repositories/pesquisa.repository';
import { AbstractPesquisaService } from './abstract/pesquisa.abstract.service';
import { PesquisaService } from './services/pesquisa.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pesquisa])],
  controllers: [PesquisaController],
  providers: [
    PesquisaRepository,
    PesquisaService,
    {
      provide: AbstractPesquisaRepository,
      useClass: PesquisaRepository
    },
    {
      provide: AbstractPesquisaService,
      useClass: PesquisaService
    }
  ],
})
export class PesquisaModule {}
