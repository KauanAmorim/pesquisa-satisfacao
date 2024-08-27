import { Usuario } from 'src/database/entities/usuario.entity';
import { CreateUsuarioDto } from '../dto/createUsuario.dto';
import { UpdateUsuarioDto } from '../dto/updateUsuario.dto';
import { FindUsuarioDto } from '../dto/findUsuario.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class AbstractUsuarioService {
  abstract create(usuarioDto: CreateUsuarioDto): Promise<Usuario>;
  abstract update(usuarioDto: UpdateUsuarioDto): Promise<Usuario>;
  abstract findBy(usuarioDto: FindUsuarioDto): Promise<Usuario[]>;
}
