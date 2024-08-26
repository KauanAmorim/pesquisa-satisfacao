import { Injectable } from "@nestjs/common";
import { Usuario } from "../../../database/entities/usuario.entity";
import { AbstractUsuarioRepository } from "../abstract/usuario.abstract.repository";
import { CreateUsuarioDto } from "../dto/createUsuario.dto";
import { UpdateUsuarioDto } from "../dto/updateUsuario.dto";
import { FindUsuarioDto } from "../dto/findUsuario.dto";

@Injectable()
export class UsuarioMockRepository implements AbstractUsuarioRepository {
  create(usuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuario = new Usuario();
    usuario.cpf = usuarioDto.cpf;
    usuario.nome = usuarioDto.nome;
    usuario.email = usuarioDto.email;
    usuario.data_nascimento = usuarioDto.data_nascimento;
    usuario.genero = usuarioDto.genero;

    return Promise.resolve(usuario);
  }

  update(usuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    const usuario = new Usuario();
    usuario.cpf = usuarioDto.cpf;
    usuario.nome = usuarioDto.nome;
    usuario.email = usuarioDto.email;
    usuario.data_nascimento = usuarioDto.data_nascimento;
    usuario.genero = usuarioDto.genero;

    return Promise.resolve(usuario);
  }

  findBy(usuarioDto: FindUsuarioDto): Promise<Usuario[]> {
    const peterParker = new Usuario();
    peterParker.cpf = '12345678910';
    peterParker.nome = 'Peter Parker';
    peterParker.email = 'perter@aranha.com.br';
    peterParker.data_nascimento = new Date();
    peterParker.genero = 'masculino';
    peterParker.created_at = new Date();
    peterParker.updated_at = new Date();

    const milesMorales = new Usuario();
    milesMorales.cpf = '12345678910';
    milesMorales.nome = 'Miles Morales';
    milesMorales.email = 'miles@aranha.com.br';
    milesMorales.data_nascimento = new Date();
    milesMorales.genero = 'masculino';
    milesMorales.created_at = new Date();
    milesMorales.updated_at = new Date();

    return Promise.resolve([peterParker, milesMorales]);
  }
}