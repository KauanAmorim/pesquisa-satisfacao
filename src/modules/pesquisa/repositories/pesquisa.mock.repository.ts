import { Injectable } from "@nestjs/common";
import { AbstractPesquisaRepository } from "../abstract/pesquisa.abstract.repository";
import { Pesquisa } from "../../../database/entities/pesquisa.entity";
import { CreatePesquisaDto } from "../dto/createPesquisa.dto";
import { FindPesquisaDto } from "../dto/findPesquisa.dto";
import { UpdatePesquisaDto } from "../dto/updatePesquisa.dto";

@Injectable()
export class PesquisaMockRepository implements AbstractPesquisaRepository {
  async create(createPesquisa: CreatePesquisaDto): Promise<Pesquisa> {
    const pesquisa = new Pesquisa();
    pesquisa.nome = createPesquisa.nome;
    pesquisa.ativo = createPesquisa.ativo;
    pesquisa.id_usuario = createPesquisa.id_usuario;

    return Promise.resolve(pesquisa);
  }

  async update(updatePesquisa: UpdatePesquisaDto): Promise<Pesquisa> {
    const pesquisa = new Pesquisa();
    pesquisa.nome = updatePesquisa.nome;
    pesquisa.ativo = updatePesquisa.ativo;
    pesquisa.id_usuario = updatePesquisa.id_usuario;

    return Promise.resolve(pesquisa);
  }
  findBy(findPesquisa: FindPesquisaDto): Promise<Pesquisa[]> {
    const seguranca = new Pesquisa();
    seguranca.nome = 'Pesquisa de segurança social';
    seguranca.ativo = true;
    seguranca.id_usuario = 1;

    const satisfacao = new Pesquisa();
    satisfacao.nome = 'Pesquisa de satisfacao';
    satisfacao.ativo = true;
    satisfacao.id_usuario = 1;

    return Promise.resolve([seguranca, satisfacao]);
  }
}
