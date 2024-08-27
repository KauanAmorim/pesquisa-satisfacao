import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { AbstractPesquisaService } from '../abstract/pesquisa.abstract.service';
import { CreatePesquisaDto } from '../dto/createPesquisa.dto';
import { UpdatePesquisaDto } from '../dto/updatePesquisa.dto';
import { FindPesquisaDto } from '../dto/findPesquisa.dto';
import { Pesquisa } from '../../../database/entities/pesquisa.entity';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Pesquisa')
@Controller('pesquisa')
export class PesquisaController {
  constructor(private readonly pesquisaService: AbstractPesquisaService) {}

  @Post()
  @ApiResponse({ type: Pesquisa })
  async createPesquisa(
    @Body() pesquisaDto: CreatePesquisaDto,
  ): Promise<Pesquisa> {
    return this.pesquisaService.create(pesquisaDto);
  }

  @Patch()
  @ApiResponse({ type: Pesquisa })
  async updatePesquisa(
    @Body() pesquisaDto: UpdatePesquisaDto,
  ): Promise<Pesquisa> {
    return this.pesquisaService.update(pesquisaDto);
  }

  @Get()
  @ApiResponse({ type: [Pesquisa] })
  async getPesquisa(
    @Query() pesquisaDto: FindPesquisaDto,
  ): Promise<Pesquisa[]> {
    return this.pesquisaService.findBy(pesquisaDto);
  }
}
