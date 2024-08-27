import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { AbstractPesquisaService } from '../abstract/pesquisa.abstract.service';
import { CreatePesquisaDto } from '../dto/createPesquisa.dto';
import { UpdatePesquisaDto } from '../dto/updatePesquisa.dto';
import { FindPesquisaDto } from '../dto/findPesquisa.dto';
import { Pesquisa } from '../../../database/entities/pesquisa.entity';

@Controller('pesquisa')
export class PesquisaController {
  constructor(private readonly pesquisaService: AbstractPesquisaService) {}

  @Post()
  async createPesquisa(
    @Body() pesquisaDto: CreatePesquisaDto,
  ): Promise<Pesquisa> {
    return this.pesquisaService.create(pesquisaDto);
  }

  @Patch()
  async updatePesquisa(
    @Body() pesquisaDto: UpdatePesquisaDto,
  ): Promise<Pesquisa> {
    return this.pesquisaService.update(pesquisaDto);
  }

  @Get()
  async getPesquisa(
    @Query() pesquisaDto: FindPesquisaDto,
  ): Promise<Pesquisa[]> {
    return this.pesquisaService.findBy(pesquisaDto);
  }
}
