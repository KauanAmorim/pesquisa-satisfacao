import { Injectable, NotFoundException } from "@nestjs/common";
import { AbstractPerguntaRespostaRepository } from "../abstract/perguntaResposta.abstract.respository";
import { PerguntaResposta } from "../../../database/entities/perguntaResposta.entity";
import { CreatePerguntaRespostaDto } from "../dto/createPerguntaResposta.dto";
import { FindPerguntaRespostaDto } from "../dto/findPerguntaResposta.dto";
import { UpdatePerguntaRespostaDto } from "../dto/updatePerguntaResposta.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class PerguntaRespostaRepository implements AbstractPerguntaRespostaRepository {
  constructor(
    @InjectRepository(PerguntaResposta)
    private readonly perguntaRespostaRepository: Repository<PerguntaResposta>
  ) {}

  async create(perguntaRespostaDto: CreatePerguntaRespostaDto): Promise<PerguntaResposta> {
    const perguntaReposta = new PerguntaResposta();
    perguntaReposta.idPesquisa = perguntaRespostaDto.idPesquisa;
    perguntaReposta.idPergunta = perguntaRespostaDto.idPergunta;
    perguntaReposta.idResposta = perguntaRespostaDto.idResposta;

    await this.perguntaRespostaRepository.save(perguntaReposta);
    return perguntaReposta;
  }

  async update(perguntaRespostaDto: UpdatePerguntaRespostaDto): Promise<PerguntaResposta> {
    const perguntaRespostaEncontrada = await this.perguntaRespostaRepository.findOneBy({
      id: perguntaRespostaDto.id
    })
    if(!perguntaRespostaEncontrada) {
      throw new NotFoundException('Registro não encontrado')
    }

    perguntaRespostaEncontrada.idPesquisa = perguntaRespostaDto.idPesquisa;
    perguntaRespostaEncontrada.idPergunta = perguntaRespostaDto.idPergunta;
    perguntaRespostaEncontrada.idResposta = perguntaRespostaDto.idResposta;
    this.perguntaRespostaRepository.save(perguntaRespostaEncontrada);
    return perguntaRespostaEncontrada;
  }

  async findBy(perguntaRespostaDto: FindPerguntaRespostaDto): Promise<PerguntaResposta[]> {
    return this.perguntaRespostaRepository.findBy(perguntaRespostaDto);
  }
}