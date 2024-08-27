import { Body, Controller, Post } from '@nestjs/common';
import { CriarPesquisaCompleta } from '../services/criarPesquisaCompleta.service';
import { CriarPesquisaCompletaDto } from '../dto/criarPesquisaCompleta.dto';

@Controller('pesquisa-completa')
export class CriarPesquisaCompletaController {
  constructor(
    private readonly criarPesquisaCompletaService: CriarPesquisaCompleta,
  ) {}

  @Post()
  async createPesquisaCompleta(
    @Body() criarPesquisaCompletaDto: CriarPesquisaCompletaDto,
  ) {
    return this.criarPesquisaCompletaService.execute(criarPesquisaCompletaDto);
  }
}
