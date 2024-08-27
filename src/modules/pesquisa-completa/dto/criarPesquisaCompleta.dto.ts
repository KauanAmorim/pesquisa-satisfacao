import { CreatePerguntaDto } from "src/modules/pergunta/dto/createPergunta.dto";
import { CreatePesquisaDto } from "../../../modules/pesquisa/dto/createPesquisa.dto";

export class CriarPesquisaCompletaDto {
  pesquisa: CreatePesquisaDto;
  perguntas: CreatePerguntaDto[];
}