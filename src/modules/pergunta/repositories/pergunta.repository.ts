import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pergunta } from '../../../database/entities/pergunta.entity';
import { Repository } from 'typeorm';
import { AbstractPerguntaRepository } from '../abstract/pergunta.abstract.repository';
import { CreatePerguntaDto } from '../dto/createPergunta.dto';
import { FindPerguntaDto } from '../dto/findPergunta.dto';
import { UpdatePerguntaDto } from '../dto/updatePergunta.dto';

@Injectable()
export class PerguntaRepository implements AbstractPerguntaRepository {
  constructor(
    @InjectRepository(Pergunta)
    private readonly perguntaRepository: Repository<Pergunta>,
  ) {}

  async create(perguntaDto: CreatePerguntaDto): Promise<Pergunta> {
    const pergunta = new Pergunta();
    pergunta.pergunta = perguntaDto.pergunta;
    pergunta.ativo = perguntaDto.ativo;
    pergunta.obrigatorio = perguntaDto.obrigatorio;

    this.perguntaRepository.save(pergunta);
    return pergunta;
  }

  async update(perguntaDto: UpdatePerguntaDto): Promise<Pergunta> {
    const perguntaEncontrada = await this.perguntaRepository.findOneBy({
      id: perguntaDto.id
    })
    if(!perguntaEncontrada) {
      throw new NotFoundException('Pergunta não encontrada');
    }

    perguntaEncontrada.pergunta = perguntaDto.pergunta;
    perguntaEncontrada.ativo = perguntaDto.ativo;
    perguntaEncontrada.obrigatorio = perguntaDto.obrigatorio;

    this.perguntaRepository.save(perguntaEncontrada);
    return perguntaEncontrada;
  }

  async findBy(perguntaDto: FindPerguntaDto): Promise<Pergunta[]> {
    return this.perguntaRepository.findBy(perguntaDto)
  }
}
