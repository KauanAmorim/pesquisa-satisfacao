import { Pergunta } from "../../../database/entities/pergunta.entity";
import { CreatePerguntaDto } from "../dto/createPergunta.dto";
import { FindPerguntaDto } from "../dto/findPergunta.dto";
import { UpdatePerguntaDto } from "../dto/updatePergunta.dto";

export abstract class AbstractPerguntaService
{
  abstract create(perguntaDto: CreatePerguntaDto): Promise<Pergunta>;
  abstract update(perguntaDto: UpdatePerguntaDto): Promise<Pergunta>;
  abstract findBy(perguntaDto: FindPerguntaDto): Promise<Pergunta[]>;
}