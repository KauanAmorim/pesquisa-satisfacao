import { Injectable } from '@nestjs/common';
import { AbstractUsuarioPesquisaRepository } from '../abstract/usuarioPesquisa.abstract.respository';
import { CreateUsuarioPesquisaDto } from '../dto/createUsuarioPesquisa.dto';
import { UpdateUsuarioPesquisaDto } from '../dto/updateUsuarioPesquisa.dto';
import { FindUsuarioPesquisaDto } from '../dto/findUsuarioPesquisa.dto';
import { UsuarioPesquisa } from '../../../database/entities/usuarioPesquisa.entity';

@Injectable()
export class UsuarioPesquisaMockRepository implements AbstractUsuarioPesquisaRepository {
  async create(usuarioPesquisaDto: CreateUsuarioPesquisaDto): Promise<UsuarioPesquisa> {
    const usuarioPesquisa = new UsuarioPesquisa();
    usuarioPesquisa.idUsuario = usuarioPesquisaDto.idUsuario;
    usuarioPesquisa.idPesquisa = usuarioPesquisaDto.idPesquisa;
    return usuarioPesquisa;
  }

  async update(usuarioPesquisaDto: UpdateUsuarioPesquisaDto): Promise<UsuarioPesquisa> {
    const usuarioPesquisa = new UsuarioPesquisa();
    usuarioPesquisa.idUsuario = usuarioPesquisaDto.idUsuario;
    usuarioPesquisa.idPesquisa = usuarioPesquisaDto.idPesquisa;
    return usuarioPesquisa;
  }

  async findBy(usuarioPesquisaDto: FindUsuarioPesquisaDto): Promise<UsuarioPesquisa[]> {
    const geek = new UsuarioPesquisa();
    geek.idUsuario = 1;
    geek.idPesquisa = 1;

    const otaku = new UsuarioPesquisa();
    otaku.idUsuario = 1;
    otaku.idPesquisa = 1;

    return Promise.resolve([geek, otaku]);
  }
}
