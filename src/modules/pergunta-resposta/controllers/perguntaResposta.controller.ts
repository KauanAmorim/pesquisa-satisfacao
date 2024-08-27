import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { AbstractPerguntaRespostaService } from '../abstract/perguntaResposta.abstract.service';
import { CreatePerguntaRespostaDto } from '../dto/createPerguntaResposta.dto';
import { PerguntaResposta } from '../../../database/entities/perguntaResposta.entity';
import { UpdatePerguntaRespostaDto } from '../dto/updatePerguntaResposta.dto';
import { FindPerguntaRespostaDto } from '../dto/findPerguntaResposta.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Pergunta-resposta')
@Controller('pergunta-resposta')
export class PerguntaRespostaController {
  constructor(
    private readonly perguntaRespostaService: AbstractPerguntaRespostaService,
  ) {}

  @Post()
  @ApiResponse({ type: PerguntaResposta })
  async createPerguntaResposta(
    @Body() perguntaRespostaDto: CreatePerguntaRespostaDto,
  ): Promise<PerguntaResposta> {
    return this.perguntaRespostaService.create(perguntaRespostaDto);
  }

  @Patch()
  @ApiResponse({ type: PerguntaResposta })
  async updatePerguntaResposta(
    @Body() perguntaRespostaDto: UpdatePerguntaRespostaDto,
  ): Promise<PerguntaResposta> {
    return this.perguntaRespostaService.update(perguntaRespostaDto);
  }

  @Get()
  @ApiResponse({ type: [PerguntaResposta] })
  async getPerguntaResposta(
    @Query() perguntaRespostaDto: FindPerguntaRespostaDto,
  ): Promise<PerguntaResposta[]> {
    return this.perguntaRespostaService.findBy(perguntaRespostaDto);
  }
}
