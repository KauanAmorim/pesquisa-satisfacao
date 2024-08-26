import { Injectable } from "@nestjs/common";
import { AbstractPerguntaRespostaService } from "../abstract/perguntaResposta.abstract.service";
import { PerguntaResposta } from "src/database/entities/perguntaResposta.entity";
import { CreatePerguntaRespostaDto } from "../dto/createPerguntaResposta.dto";
import { FindPerguntaRespostaDto } from "../dto/findPerguntaResposta.dto";
import { UpdatePerguntaRespostaDto } from "../dto/updatePerguntaResposta.dto";
import { AbstractPerguntaRespostaRepository } from "../abstract/perguntaResposta.abstract.respository";

@Injectable()
export class PerguntaRespostaService implements AbstractPerguntaRespostaService {
  constructor(
    private readonly perguntaRespostaRepository: AbstractPerguntaRespostaRepository
  ) {}

  async create(perguntaRespostaDto: CreatePerguntaRespostaDto): Promise<PerguntaResposta> {
    return this.perguntaRespostaRepository.create(perguntaRespostaDto);
  }

  async update(perguntaRespostaDto: UpdatePerguntaRespostaDto): Promise<PerguntaResposta> {
    return this.perguntaRespostaRepository.update(perguntaRespostaDto);
  }

  async findBy(perguntaRespostaDto: FindPerguntaRespostaDto): Promise<PerguntaResposta[]> {
    return this.perguntaRespostaRepository.findBy(perguntaRespostaDto);
  }
}