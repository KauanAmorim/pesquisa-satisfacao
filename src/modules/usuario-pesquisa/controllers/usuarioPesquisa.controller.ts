import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { AbstractUsuarioPesquisaService } from '../abstract/usuarioPesquisa.abstract.service';
import { CreateUsuarioPesquisaDto } from '../dto/createUsuarioPesquisa.dto';
import { UpdateUsuarioPesquisaDto } from '../dto/updateUsuarioPesquisa.dto';
import { FindUsuarioPesquisaDto } from '../dto/findUsuarioPesquisa.dto';
import { UsuarioPesquisa } from '../../../database/entities/usuarioPesquisa.entity';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Usuario-pesquisa')
@Controller('usuario-pesquisa')
export class UsuarioPesquisaController {
  constructor(
    private readonly usuarioPesquisaService: AbstractUsuarioPesquisaService,
  ) {}

  @Post()
  @ApiResponse({ type: UsuarioPesquisa })
  async createUsuarioPesquisa(
    @Body() usuarioPesquisaDto: CreateUsuarioPesquisaDto,
  ): Promise<UsuarioPesquisa> {
    return this.usuarioPesquisaService.create(usuarioPesquisaDto);
  }

  @Patch()
  @ApiResponse({ type: UsuarioPesquisa })
  async updateUsuarioPesquisa(
    @Body() usuarioPesquisaDto: UpdateUsuarioPesquisaDto,
  ): Promise<UsuarioPesquisa> {
    return this.usuarioPesquisaService.update(usuarioPesquisaDto);
  }

  @Get()
  @ApiResponse({ type: [UsuarioPesquisa] })
  async getUsuarioPesquisa(
    @Query() usuarioPesquisaDto: FindUsuarioPesquisaDto,
  ): Promise<UsuarioPesquisa[]> {
    return this.usuarioPesquisaService.findBy(usuarioPesquisaDto);
  }
}
