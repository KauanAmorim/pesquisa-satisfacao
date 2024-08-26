import { Injectable } from '@nestjs/common';
import { AbstractRespostaRepository } from '../abstract/resposta.abstract.repository';
import { CreateRespostaDto } from '../dto/createResposta.dto';
import { FindRespostaDto } from '../dto/findResposta.dto';
import { UpdateRespostaDto } from '../dto/updateResposta.dto';
import { Resposta } from '../../../database/entities/resposta.entity';

@Injectable()
export class RespostaMockRepository implements AbstractRespostaRepository {
  async create(respostaDto: CreateRespostaDto): Promise<Resposta> {
    const resposta = new Resposta();
    resposta.resposta = respostaDto.resposta;
    return resposta;
  }

  async update(respostaDto: UpdateRespostaDto): Promise<Resposta> {
    const resposta = new Resposta();
    resposta.resposta = respostaDto.resposta;
    return resposta;
  }

  async findBy(respostaDto: FindRespostaDto): Promise<Resposta[]> {
    const geek = new Resposta();
    geek.resposta = 'Sim, gosto muito de quadrinho e sou apaixonado pelo MCU';

    const otaku = new Resposta();
    otaku.resposta = 'Sim, meu anime favorito é One Piece e amo ler Berserk';

    return Promise.resolve([geek, otaku]);
  }
}
