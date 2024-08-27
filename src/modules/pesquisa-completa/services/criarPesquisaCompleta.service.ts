import { Injectable } from '@nestjs/common';
import { CriarPesquisaCompletaDto } from '../dto/criarPesquisaCompleta.dto';
import { CreatePesquisaDto } from 'src/modules/pesquisa/dto/createPesquisa.dto';
import { AbstractPesquisaService } from 'src/modules/pesquisa/abstract/pesquisa.abstract.service';
import { AbstractPerguntaService } from 'src/modules/pergunta/abstract/pergunta.abstract.service';
import { Pergunta } from '../../../database/entities/pergunta.entity';
import { Pesquisa } from '../../../database/entities/pesquisa.entity';
import { CreatePerguntaDto } from 'src/modules/pergunta/dto/createPergunta.dto';

@Injectable()
export class CriarPesquisaCompletaService {
  constructor(
    private readonly pesquisaService: AbstractPesquisaService,
    private readonly perguntaService: AbstractPerguntaService,
  ) {}

  async execute(pesquisaCompletaDto: CriarPesquisaCompletaDto) {
    const pesquisa = await this.createPesquisa(pesquisaCompletaDto.pesquisa);
    const perguntas = await this.createPerguntas(pesquisaCompletaDto.perguntas);
    return { pesquisa, perguntas };
  }

  async createPesquisa(pesquisaDto: CreatePesquisaDto): Promise<Pesquisa> {
    return this.pesquisaService.create(pesquisaDto);
  }

  async createPerguntas(
    perguntasDto: CreatePerguntaDto[],
  ): Promise<Pergunta[]> {
    return Promise.all(
      perguntasDto.map(async (pergunta) => {
        return this.perguntaService.create(pergunta);
      }),
    );
  }
}
