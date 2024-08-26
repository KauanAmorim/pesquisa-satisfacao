import { PerguntaResposta } from "../../../database/entities/perguntaResposta.entity";
import { CreatePerguntaRespostaDto } from "../dto/createPerguntaResposta.dto";
import { FindPerguntaRespostaDto } from "../dto/findPerguntaResposta.dto";
import { UpdatePerguntaRespostaDto } from "../dto/updatePerguntaResposta.dto";

export abstract class AbstractPerguntaRespostaRepository {
  abstract create(perguntaRespostaDto: CreatePerguntaRespostaDto): Promise<PerguntaResposta>;
  abstract update(perguntaRespostaDto: UpdatePerguntaRespostaDto): Promise<PerguntaResposta>;
  abstract findBy(perguntaRespostaDto: FindPerguntaRespostaDto): Promise<PerguntaResposta[]>;
}