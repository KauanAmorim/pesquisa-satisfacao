import { Controller, Get, Patch, Post } from '@nestjs/common';
import { AbstractPerguntaRespostaService } from '../abstract/perguntaResposta.abstract.service';
import { CreatePerguntaRespostaDto } from '../dto/createPerguntaResposta.dto';
import { PerguntaResposta } from '../../../database/entities/perguntaResposta.entity';
import { UpdatePerguntaRespostaDto } from '../dto/updatePerguntaResposta.dto';
import { FindPerguntaRespostaDto } from '../dto/findPerguntaResposta.dto';

@Controller('pergunta-resposta')
export class PerguntaRespostaController {
  constructor(
    private readonly perguntaRespostaService: AbstractPerguntaRespostaService,
  ) {}

  @Post()
  async createPerguntaResposta(
    perguntaRespostaDto: CreatePerguntaRespostaDto,
  ): Promise<PerguntaResposta> {
    return this.perguntaRespostaService.create(perguntaRespostaDto);
  }

  @Patch()
  async updatePerguntaRespota(
    perguntaRespostaDto: UpdatePerguntaRespostaDto,
  ): Promise<PerguntaResposta> {
    return this.perguntaRespostaService.update(perguntaRespostaDto);
  }

  @Get()
  async getPerguntaResposta(
    perguntaRespostaDto: FindPerguntaRespostaDto,
  ): Promise<PerguntaResposta[]> {
    return this.perguntaRespostaService.findBy(perguntaRespostaDto);
  }
}
