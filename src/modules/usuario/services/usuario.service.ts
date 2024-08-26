import { Injectable } from '@nestjs/common';
import { AbstractUsuarioRepository } from '../abstract/usuario.abstract.repository';
import { Usuario } from 'src/database/entities/usuario.entity';
import { CreateUsuarioDto } from '../dto/createUsuario.dto';
import { UpdateUsuarioDto } from '../dto/updateUsuario.dto';
import { FindUsuarioDto } from '../dto/findUsuario.dto';

@Injectable()
export class UsuarioService {
  constructor(private readonly usuarioRepository: AbstractUsuarioRepository) {}

  async create(usuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return this.usuarioRepository.create(usuarioDto);
  }

  async update(usuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    return this.usuarioRepository.update(usuarioDto);
  }

  async findBy(usuarioDto: FindUsuarioDto): Promise<Usuario[]> {
    return this.usuarioRepository.findBy(usuarioDto);
  }
}
