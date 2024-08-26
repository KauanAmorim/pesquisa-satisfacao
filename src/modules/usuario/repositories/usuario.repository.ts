import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/database/entities/usuario.entity';
import { Repository } from 'typeorm';
import { AbstractUsuarioRepository } from '../abstract/usuario.abstract.repository';
import { CreateUsuarioDto } from '../dto/createUsuario.dto';
import { UpdateUsuarioDto } from '../dto/updateUsuario.dto';
import { FindUsuarioDto } from '../dto/findUsuario.dto';

@Injectable()
export class UsuarioRepository implements AbstractUsuarioRepository {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(usuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuario = new Usuario();
    usuario.cpf = usuarioDto.cpf;
    usuario.nome = usuarioDto.nome;
    usuario.email = usuarioDto.email;
    usuario.data_nascimento = usuarioDto.data_nascimento;
    usuario.genero = usuarioDto.genero;

    await this.usuarioRepository.save(usuario);
    return usuario;
  }

  async update(usuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    const usuarioEncontrado = await this.usuarioRepository.findOneBy({
      id: usuarioDto.id,
    });
    if (!usuarioEncontrado) {
      throw new NotFoundException('Usuario não encontrado');
    }

    usuarioEncontrado.cpf = usuarioDto.cpf;
    usuarioEncontrado.nome = usuarioDto.nome;
    usuarioEncontrado.email = usuarioDto.email;
    usuarioEncontrado.data_nascimento = usuarioDto.data_nascimento;
    usuarioEncontrado.genero = usuarioDto.genero;

    await this.usuarioRepository.save(usuarioEncontrado);
    return usuarioEncontrado;
  }

  async findBy(usuarioDto: FindUsuarioDto): Promise<Usuario[]> {
    return this.usuarioRepository.findBy(usuarioDto);
  }
}
