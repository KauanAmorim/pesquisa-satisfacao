import { Controller, Get, Patch, Post } from '@nestjs/common';
import { AbstractRespostaService } from '../abstract/resposta.abstract.service';
import { Resposta } from '../../../database/entities/resposta.entity';
import { CreateRespostaDto } from '../dto/createResposta.dto';
import { UpdateRespostaDto } from '../dto/updateResposta.dto';
import { FindRespostaDto } from '../dto/findResposta.dto';

@Controller('resposta')
export class RespostaController {
  constructor(private readonly respostaService: AbstractRespostaService) {}

  @Post()
  async createResposta(respostaDto: CreateRespostaDto): Promise<Resposta> {
    return this.respostaService.create(respostaDto);
  }

  @Patch()
  async updateResposta(respostaDto: UpdateRespostaDto): Promise<Resposta> {
    return this.respostaService.update(respostaDto);
  }

  @Get()
  async getResposta(respostaDto: FindRespostaDto): Promise<Resposta[]> {
    return this.respostaService.findBy(respostaDto);
  }
}
