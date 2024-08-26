import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractRespostaRepository } from '../abstract/resposta.abstract.repository';
import { CreateRespostaDto } from '../dto/createResposta.dto';
import { Resposta } from '../../../database/entities/resposta.entity';
import { UpdateRespostaDto } from '../dto/updateResposta.dto';
import { FindRespostaDto } from '../dto/findResposta.dto';

@Injectable()
export class RespostaRepository implements AbstractRespostaRepository {
  constructor(
    @InjectRepository(Resposta)
    private readonly respostaRepository: Repository<Resposta>,
  ) {}

  async create(respostaDto: CreateRespostaDto): Promise<Resposta> {
    const resposta = new Resposta();
    resposta.resposta = respostaDto.resposta;

    this.respostaRepository.save(resposta);
    return resposta;
  }

  async update(respostaDto: UpdateRespostaDto): Promise<Resposta> {
    const respostaEncontrada = await this.respostaRepository.findOneBy({
      id: respostaDto.id
    })
    if(!respostaEncontrada) {
      throw new NotFoundException('Pergunta não encontrada');
    }

    respostaEncontrada.resposta = respostaDto.resposta;

    this.respostaRepository.save(respostaEncontrada);
    return respostaEncontrada;
  }

  async findBy(respostaDto: FindRespostaDto): Promise<Resposta[]> {
    return this.respostaRepository.findBy(respostaDto)
  }
}
