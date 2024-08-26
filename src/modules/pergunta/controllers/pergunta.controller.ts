import { Controller, Get, Patch, Post } from "@nestjs/common";
import { AbstractPerguntaService } from "../abstract/pergunta.abstract.service";
import { CreatePerguntaDto } from "../dto/createPergunta.dto";
import { Pergunta } from "../../../database/entities/pergunta.entity";
import { UpdatePerguntaDto } from "../dto/updatePergunta.dto";
import { FindPerguntaDto } from "../dto/findPergunta.dto";

@Controller('pergunta')
export class PerguntaController {
  constructor(private readonly perguntaService: AbstractPerguntaService) {}

  @Post()
  async createPergunta(perguntaDto: CreatePerguntaDto): Promise<Pergunta> {
    return this.perguntaService.create(perguntaDto);
  }

  @Patch()
  async updatePergunta(perguntaDto: UpdatePerguntaDto): Promise<Pergunta> {
    return this.perguntaService.update(perguntaDto);
  }

  @Get()
  async getPergunta(perguntaDto: FindPerguntaDto): Promise<Pergunta[]> {
    return this.perguntaService.findBy(perguntaDto);
  }
}