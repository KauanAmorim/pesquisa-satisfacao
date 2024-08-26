import { Pesquisa } from "src/database/entities/pesquisa.entity";
import { CreatePesquisaDto } from "../dto/createPesquisa.dto";
import { UpdatePesquisaDto } from "../dto/updatePesquisa.dto";
import { FindPesquisaDto } from "../dto/findPesquisa.dto";

export abstract class AbstractPesquisaRepository {
  abstract create(createPesquisa: CreatePesquisaDto): Promise<Pesquisa>;
  abstract update(updatePesquisa: UpdatePesquisaDto): Promise<Pesquisa>;
  abstract findBy(findPesquisa: FindPesquisaDto): Promise<Pesquisa[]>;
}