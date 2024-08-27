import { Injectable } from "@nestjs/common";
import { PerguntaResposta } from "../../../database/entities/perguntaResposta.entity";
import { CreatePerguntaRespostaDto } from "../dto/createPerguntaResposta.dto";
import { FindPerguntaRespostaDto } from "../dto/findPerguntaResposta.dto";
import { UpdatePerguntaRespostaDto } from "../dto/updatePerguntaResposta.dto";

@Injectable()
export abstract class AbstractPerguntaRespostaService {
  abstract create(perguntaRespostaDto: CreatePerguntaRespostaDto): Promise<PerguntaResposta>;
  abstract update(perguntaRespostaDto: UpdatePerguntaRespostaDto): Promise<PerguntaResposta>;
  abstract findBy(perguntaRespostaDto: FindPerguntaRespostaDto): Promise<PerguntaResposta[]>;
}