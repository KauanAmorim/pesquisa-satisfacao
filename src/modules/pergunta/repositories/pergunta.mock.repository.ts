import { Injectable, NotFoundException } from '@nestjs/common';
import { Pergunta } from '../../../database/entities/pergunta.entity';
import { AbstractPerguntaRepository } from '../abstract/pergunta.abstract.repository';
import { CreatePerguntaDto } from '../dto/createPergunta.dto';
import { FindPerguntaDto } from '../dto/findPergunta.dto';
import { UpdatePerguntaDto } from '../dto/updatePergunta.dto';

@Injectable()
export class PerguntaMockRepository implements AbstractPerguntaRepository {

  async create(perguntaDto: CreatePerguntaDto): Promise<Pergunta> {
    const pergunta = new Pergunta();
    pergunta.pergunta = perguntaDto.pergunta;
    pergunta.ativo = perguntaDto.ativo;
    pergunta.obrigatorio = perguntaDto.obrigatorio;
    return pergunta;
  }

  async update(perguntaDto: UpdatePerguntaDto): Promise<Pergunta> {
    const pergunta = new Pergunta();
    pergunta.pergunta = perguntaDto.pergunta;
    pergunta.ativo = perguntaDto.ativo;
    pergunta.obrigatorio = perguntaDto.obrigatorio;
    return pergunta;
  }

  async findBy(perguntaDto: FindPerguntaDto): Promise<Pergunta[]> {
    const geek = new Pergunta();
    geek.pergunta = 'Você gosta de ficar por dentro da cultura pop de filmes, series e quadrinho?';
    geek.ativo = true;
    geek.obrigatorio = true;

    const otaku = new Pergunta();
    otaku.pergunta = 'Você gosta de ler mangás e assistir animes?';
    otaku.ativo = true;
    otaku.obrigatorio = true;

    return Promise.resolve([geek, otaku]);
  }
}
