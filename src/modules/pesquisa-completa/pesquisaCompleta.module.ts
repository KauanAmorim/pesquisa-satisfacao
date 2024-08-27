import { Module } from '@nestjs/common';
import { CriarPesquisaCompletaController } from './controllers/criarPesquisaCompleta.controller';
import { CriarPesquisaCompletaService } from './services/criarPesquisaCompleta.service';

@Module({
  imports: [],
  controllers: [CriarPesquisaCompletaController],
  providers: [CriarPesquisaCompletaService],
})
export class PesquisaCompletaModule {}
