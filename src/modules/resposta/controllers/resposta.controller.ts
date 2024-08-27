import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { AbstractRespostaService } from '../abstract/resposta.abstract.service';
import { Resposta } from '../../../database/entities/resposta.entity';
import { CreateRespostaDto } from '../dto/createResposta.dto';
import { UpdateRespostaDto } from '../dto/updateResposta.dto';
import { FindRespostaDto } from '../dto/findResposta.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Resposta')
@Controller('resposta')
export class RespostaController {
  constructor(private readonly respostaService: AbstractRespostaService) {}

  @Post()
  @ApiResponse({ type: Resposta })
  async createResposta(
    @Body() respostaDto: CreateRespostaDto,
  ): Promise<Resposta> {
    return this.respostaService.create(respostaDto);
  }

  @Patch()
  @ApiResponse({ type: Resposta })
  async updateResposta(
    @Body() respostaDto: UpdateRespostaDto,
  ): Promise<Resposta> {
    return this.respostaService.update(respostaDto);
  }

  @Get()
  @ApiResponse({ type: [Resposta] })
  async getResposta(
    @Query() respostaDto: FindRespostaDto,
  ): Promise<Resposta[]> {
    return this.respostaService.findBy(respostaDto);
  }
}
