import { Injectable } from '@nestjs/common';
import { AbstractUsuarioPesquisaService } from '../abstract/usuarioPesquisa.abstract.service';
import { AbstractUsuarioPesquisaRepository } from '../abstract/usuarioPesquisa.abstract.respository';
import { CreateUsuarioPesquisaDto } from '../dto/createUsuarioPesquisa.dto';
import { UpdateUsuarioPesquisaDto } from '../dto/updateUsuarioPesquisa.dto';
import { FindUsuarioPesquisaDto } from '../dto/findUsuarioPesquisa.dto';
import { UsuarioPesquisa } from '../../../database/entities/usuarioPesquisa.entity';

@Injectable()
export class UsuarioPesquisaService implements AbstractUsuarioPesquisaService {
  constructor(
    private readonly usuarioPesquisaRepository: AbstractUsuarioPesquisaRepository,
  ) {}

  async create(
    usuarioPesquisaDto: CreateUsuarioPesquisaDto,
  ): Promise<UsuarioPesquisa> {
    return this.usuarioPesquisaRepository.create(usuarioPesquisaDto);
  }

  async update(
    usuarioPesquisaDto: UpdateUsuarioPesquisaDto,
  ): Promise<UsuarioPesquisa> {
    return this.usuarioPesquisaRepository.update(usuarioPesquisaDto);
  }

  async findBy(
    usuarioPesquisaDto: FindUsuarioPesquisaDto,
  ): Promise<UsuarioPesquisa[]> {
    return this.usuarioPesquisaRepository.findBy(usuarioPesquisaDto);
  }
}
