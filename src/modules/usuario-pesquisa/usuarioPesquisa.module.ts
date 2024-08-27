import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioPesquisa } from '../../database/entities/usuarioPesquisa.entity';
import { UsuarioPesquisaController } from './controllers/usuarioPesquisa.controller';
import { AbstractUsuarioPesquisaRepository } from './abstract/usuarioPesquisa.abstract.respository';
import { UsuarioPesquisaRepository } from './repositories/usuarioPesquisa.repository';
import { AbstractUsuarioPesquisaService } from './abstract/usuarioPesquisa.abstract.service';
import { UsuarioPesquisaService } from './services/usuarioPesquisa.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioPesquisa])],
  controllers: [UsuarioPesquisaController],
  providers: [
    {
      provide: AbstractUsuarioPesquisaRepository,
      useClass: UsuarioPesquisaRepository
    },
    {
      provide: AbstractUsuarioPesquisaService,
      useClass: UsuarioPesquisaService
    }
  ],
})
export class UsuarioPesquisaModule {}
