import { UsuarioPesquisa } from "../../../database/entities/usuarioPesquisa.entity";
import { CreateUsuarioPesquisaDto } from "../dto/createUsuarioPesquisa.dto";
import { FindUsuarioPesquisaDto } from "../dto/findUsuarioPesquisa.dto";
import { UpdateUsuarioPesquisaDto } from "../dto/updateUsuarioPesquisa.dto";

export abstract class AbstractUsuarioPesquisaService {
  abstract create(perguntaRespostaDto: CreateUsuarioPesquisaDto): Promise<UsuarioPesquisa>;
  abstract update(perguntaRespostaDto: UpdateUsuarioPesquisaDto): Promise<UsuarioPesquisa>;
  abstract findBy(perguntaRespostaDto: FindUsuarioPesquisaDto): Promise<UsuarioPesquisa[]>;
}