import { Injectable, NotFoundException } from "@nestjs/common";
import { AbstractUsuarioPesquisaRepository } from "../abstract/usuarioPesquisa.abstract.respository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UsuarioPesquisa } from "../../../database/entities/usuarioPesquisa.entity";
import { CreateUsuarioPesquisaDto } from "../dto/createUsuarioPesquisa.dto";
import { UpdateUsuarioPesquisaDto } from "../dto/updateUsuarioPesquisa.dto";
import { FindUsuarioPesquisaDto } from "../dto/findUsuarioPesquisa.dto";

@Injectable()
export class UsuarioPesquisaRepository implements AbstractUsuarioPesquisaRepository {
  constructor(
    @InjectRepository(UsuarioPesquisa)
    private readonly usuarioPesquisaRepository: Repository<UsuarioPesquisa>
  ) {}

  async create(usuarioPesquisaDto: CreateUsuarioPesquisaDto): Promise<UsuarioPesquisa> {
    const usuarioPesquisa = new UsuarioPesquisa();
    usuarioPesquisa.idUsuario = usuarioPesquisaDto.idUsuario;
    usuarioPesquisa.idPesquisa = usuarioPesquisaDto.idPesquisa;

    await this.usuarioPesquisaRepository.save(usuarioPesquisa);
    return usuarioPesquisa;
  }

  async update(usuarioPesquisaDto: UpdateUsuarioPesquisaDto): Promise<UsuarioPesquisa> {
    const usuarioPesquisaEncontrado = await this.usuarioPesquisaRepository.findOneBy({
      id: usuarioPesquisaDto.id
    })
    if(!usuarioPesquisaEncontrado) {
      throw new NotFoundException('Registro não encontrado')
    }

    usuarioPesquisaEncontrado.idUsuario = usuarioPesquisaDto.idUsuario;
    usuarioPesquisaEncontrado.idPesquisa = usuarioPesquisaDto.idPesquisa;
    this.usuarioPesquisaRepository.save(usuarioPesquisaEncontrado);
    return usuarioPesquisaEncontrado;
  }

  async findBy(usuarioPesquisaDto: FindUsuarioPesquisaDto): Promise<UsuarioPesquisa[]> {
    return this.usuarioPesquisaRepository.findBy(usuarioPesquisaDto);
  }
}