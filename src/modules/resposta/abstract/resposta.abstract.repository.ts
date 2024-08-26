import { Resposta } from "../../../database/entities/resposta.entity";
import { CreateRespostaDto } from "../dto/createResposta.dto";
import { FindRespostaDto } from "../dto/findResposta.dto";
import { UpdateRespostaDto } from "../dto/updateResposta.dto";

export abstract class AbstractRespostaRepository
{
  abstract create(perguntaDto: CreateRespostaDto): Promise<Resposta>;
  abstract update(perguntaDto: UpdateRespostaDto): Promise<Resposta>;
  abstract findBy(perguntaDto: FindRespostaDto): Promise<Resposta[]>;
}