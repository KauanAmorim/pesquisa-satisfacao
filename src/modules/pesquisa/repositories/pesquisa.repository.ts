import { Injectable, NotFoundException } from "@nestjs/common";
import { AbstractPesquisaRepository } from "../abstract/pesquisa.abstract.repository";
import { Pesquisa } from "../../../database/entities/pesquisa.entity";
import { CreatePesquisaDto } from "../dto/createPesquisa.dto";
import { FindPesquisaDto } from "../dto/findPesquisa.dto";
import { UpdatePesquisaDto } from "../dto/updatePesquisa.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class PesquisaRepository implements AbstractPesquisaRepository {
  constructor(
    @InjectRepository(Pesquisa)
    private readonly pesquisaRepository: Repository<Pesquisa>
  ) {}

  async create(createPesquisa: CreatePesquisaDto): Promise<Pesquisa> {
    const pesquisa = new Pesquisa();
    pesquisa.nome = createPesquisa.nome;
    pesquisa.ativo = createPesquisa.ativo;
    pesquisa.id_usuario = createPesquisa.id_usuario;

    await this.pesquisaRepository.save(pesquisa);
    return pesquisa;
  }

  async update(updatePesquisa: UpdatePesquisaDto): Promise<Pesquisa> {
    const pesquisaEncontrada = await this.pesquisaRepository.findOneBy({
      id: updatePesquisa.id
    })
    if(!pesquisaEncontrada) {
      throw new NotFoundException('Pesquisa não encontrada');
    }

    pesquisaEncontrada.nome = updatePesquisa.nome;
    pesquisaEncontrada.ativo = updatePesquisa.ativo;
    pesquisaEncontrada.id_usuario = updatePesquisa.id_usuario;

    await this.pesquisaRepository.save(pesquisaEncontrada);
    return pesquisaEncontrada;
  }
  findBy(findPesquisa: FindPesquisaDto): Promise<Pesquisa[]> {
    return this.pesquisaRepository.findBy(findPesquisa);
  }
}
