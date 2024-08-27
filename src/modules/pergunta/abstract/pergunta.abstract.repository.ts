import { Injectable } from "@nestjs/common";
import { Pergunta } from "../../../database/entities/pergunta.entity";
import { CreatePerguntaDto } from "../dto/createPergunta.dto";
import { FindPerguntaDto } from "../dto/findPergunta.dto";
import { UpdatePerguntaDto } from "../dto/updatePergunta.dto";

@Injectable()
export abstract class AbstractPerguntaRepository
{
  abstract create(perguntaDto: CreatePerguntaDto): Promise<Pergunta>;
  abstract update(perguntaDto: UpdatePerguntaDto): Promise<Pergunta>;
  abstract findBy(perguntaDto: FindPerguntaDto): Promise<Pergunta[]>;
}