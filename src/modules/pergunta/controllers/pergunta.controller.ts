import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { AbstractPerguntaService } from '../abstract/pergunta.abstract.service';
import { CreatePerguntaDto } from '../dto/createPergunta.dto';
import { Pergunta } from '../../../database/entities/pergunta.entity';
import { UpdatePerguntaDto } from '../dto/updatePergunta.dto';
import { FindPerguntaDto } from '../dto/findPergunta.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Pergunta')
@Controller('pergunta')
export class PerguntaController {
  constructor(private readonly perguntaService: AbstractPerguntaService) {}

  @Post()
  @ApiResponse({ type: Pergunta })
  async createPergunta(
    @Body() perguntaDto: CreatePerguntaDto,
  ): Promise<Pergunta> {
    return this.perguntaService.create(perguntaDto);
  }

  @Patch()
  @ApiResponse({ type: Pergunta })
  async updatePergunta(
    @Body() perguntaDto: UpdatePerguntaDto,
  ): Promise<Pergunta> {
    return this.perguntaService.update(perguntaDto);
  }

  @Get()
  @ApiResponse({ type: [Pergunta] })
  async getPergunta(
    @Query() perguntaDto: FindPerguntaDto,
  ): Promise<Pergunta[]> {
    return this.perguntaService.findBy(perguntaDto);
  }
}
