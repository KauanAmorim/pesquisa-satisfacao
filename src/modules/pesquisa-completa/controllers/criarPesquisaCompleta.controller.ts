import { Body, Controller, Post } from '@nestjs/common';
import { CriarPesquisaCompletaService } from '../services/criarPesquisaCompleta.service';
import { CriarPesquisaCompletaDto } from '../dto/criarPesquisaCompleta.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pesquisa-completa') 
@Controller('pesquisa-completa')
export class CriarPesquisaCompletaController {
  constructor(
    private readonly criarPesquisaCompletaService: CriarPesquisaCompletaService,
  ) {}

  @Post()
  async createPesquisaCompleta(
    @Body() criarPesquisaCompletaDto: CriarPesquisaCompletaDto,
  ) {
    return this.criarPesquisaCompletaService.execute(criarPesquisaCompletaDto);
  }
}
