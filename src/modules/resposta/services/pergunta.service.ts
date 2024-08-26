import { Injectable } from "@nestjs/common";
import { AbstractRespostaService } from "../abstract/resposta.abstract.service";
import { AbstractRespostaRepository } from "../abstract/resposta.abstract.repository";
import { CreateRespostaDto } from "../dto/createResposta.dto";
import { UpdateRespostaDto } from "../dto/updateResposta.dto";
import { FindRespostaDto } from "../dto/findResposta.dto";
import { Resposta } from "../../../database/entities/resposta.entity";

@Injectable()
export class RespostaService implements AbstractRespostaService {
  constructor(
    private readonly respostaRepository: AbstractRespostaRepository
  ) {}

  async create(respostaDto: CreateRespostaDto): Promise<Resposta> {
    return this.respostaRepository.create(respostaDto);
  }

  async update(respostaDto: UpdateRespostaDto): Promise<Resposta> {
    return this.respostaRepository.update(respostaDto);
  }

  async findBy(respostaDto: FindRespostaDto): Promise<Resposta[]> {
    return this.respostaRepository.findBy(respostaDto);
  }
}