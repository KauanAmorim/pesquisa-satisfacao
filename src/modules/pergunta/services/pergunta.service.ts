import { Injectable } from "@nestjs/common";
import { AbstractPerguntaRepository } from "../abstract/pergunta.abstract.repository";
import { AbstractPerguntaService } from "../abstract/pergunta.abstract.service";
import { Pergunta } from "src/database/entities/pergunta.entity";
import { CreatePerguntaDto } from "../dto/createPergunta.dto";
import { FindPerguntaDto } from "../dto/findPergunta.dto";
import { UpdatePerguntaDto } from "../dto/updatePergunta.dto";

@Injectable()
export class PerguntaService implements AbstractPerguntaService {
  constructor(
    private readonly perguntaRepository: AbstractPerguntaRepository
  ) {}

  async create(perguntaDto: CreatePerguntaDto): Promise<Pergunta> {
    return this.perguntaRepository.create(perguntaDto);
  }

  async update(perguntaDto: UpdatePerguntaDto): Promise<Pergunta> {
    return this.perguntaRepository.update(perguntaDto);
  }

  async findBy(perguntaDto: FindPerguntaDto): Promise<Pergunta[]> {
    return this.perguntaRepository.findBy(perguntaDto);
  }
}