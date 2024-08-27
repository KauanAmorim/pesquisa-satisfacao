import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { Usuario } from 'src/database/entities/usuario.entity';
import { CreateUsuarioDto } from '../dto/createUsuario.dto';
import { UpdateUsuarioDto } from '../dto/updateUsuario.dto';
import { FindUsuarioDto } from '../dto/findUsuario.dto';
import { AbstractUsuarioService } from '../abstract/usuario.abstract.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Usuario')
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: AbstractUsuarioService) {}

  @Post()
  @ApiResponse({ type: Usuario })
  async createUsuario(@Body() usuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return this.usuarioService.create(usuarioDto);
  }

  @Patch()
  @ApiResponse({ type: Usuario })
  async updateUsuario(@Body() usuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    return this.usuarioService.update(usuarioDto);
  }

  @Get()
  @ApiResponse({ type: [Usuario] })
  async getUsuario(@Query() usuarioDto: FindUsuarioDto): Promise<Usuario[]> {
    return this.usuarioService.findBy(usuarioDto);
  }
}
