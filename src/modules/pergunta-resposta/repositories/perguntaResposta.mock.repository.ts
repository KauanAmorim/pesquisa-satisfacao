import { Injectable } from '@nestjs/common';
import { AbstractPerguntaRespostaRepository } from '../abstract/perguntaResposta.abstract.respository';
import { CreatePerguntaRespostaDto } from '../dto/createPerguntaResposta.dto';
import { PerguntaResposta } from '../../../database/entities/perguntaResposta.entity';
import { UpdatePerguntaRespostaDto } from '../dto/updatePerguntaResposta.dto';
import { FindPerguntaRespostaDto } from '../dto/findPerguntaResposta.dto';

@Injectable()
export class PerguntaRespostaMockRepository implements AbstractPerguntaRespostaRepository {
  async create(perguntaRespostaDto: CreatePerguntaRespostaDto): Promise<PerguntaResposta> {
    const perguntaResposta = new PerguntaResposta();
    perguntaResposta.idPesquisa = perguntaRespostaDto.idPesquisa;
    perguntaResposta.idPergunta = perguntaRespostaDto.idPergunta;
    perguntaResposta.idResposta = perguntaRespostaDto.idResposta;
    return perguntaResposta;
  }

  async update(perguntaRespostaDto: UpdatePerguntaRespostaDto): Promise<PerguntaResposta> {
    const perguntaResposta = new PerguntaResposta();
    perguntaResposta.idPesquisa = perguntaRespostaDto.idPesquisa;
    perguntaResposta.idPergunta = perguntaRespostaDto.idPergunta;
    perguntaResposta.idResposta = perguntaRespostaDto.idResposta;
    return perguntaResposta;
  }

  async findBy(perguntaRespostaDto: FindPerguntaRespostaDto): Promise<PerguntaResposta[]> {
    const geek = new PerguntaResposta();
    geek.idPesquisa = 1;
    geek.idPergunta = 1;
    geek.idResposta = 1;

    const otaku = new PerguntaResposta();
    otaku.idPesquisa = 1;
    otaku.idPergunta = 2;
    otaku.idResposta = 2;

    return Promise.resolve([geek, otaku]);
  }
}
