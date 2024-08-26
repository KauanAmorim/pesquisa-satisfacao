import { Injectable } from '@nestjs/common';
import { AbstractPesquisaRepository } from '../abstract/pesquisa.abstract.repository';
import { CreatePesquisaDto } from '../dto/createPesquisa.dto';
import { Pesquisa } from '../../../database/entities/pesquisa.entity';
import { UpdatePesquisaDto } from '../dto/updatePesquisa.dto';
import { FindPesquisaDto } from '../dto/findPesquisa.dto';

@Injectable()
export class PesquisaService {
  constructor(
    private readonly pesquisaRepository: AbstractPesquisaRepository,
  ) {}

  async create(pesquisaDto: CreatePesquisaDto): Promise<Pesquisa> {
    return this.pesquisaRepository.create(pesquisaDto);
  }

  async update(pesquisaDto: UpdatePesquisaDto): Promise<Pesquisa> {
    return this.pesquisaRepository.update(pesquisaDto);
  }

  async findBy(pesquisaDto: FindPesquisaDto): Promise<Pesquisa[]> {
    return this.pesquisaRepository.findBy(pesquisaDto);
  }
}
