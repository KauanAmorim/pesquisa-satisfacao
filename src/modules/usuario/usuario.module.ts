import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/database/entities/usuario.entity';
import { UsuarioController } from './controllers/usuario.controller';
import { AbstractUsuarioRepository } from './abstract/usuario.abstract.repository';
import { UsuarioRepository } from './repositories/usuario.repository';
import { AbstractUsuarioService } from './abstract/usuario.abstract.service';
import { UsuarioService } from './services/usuario.service';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuarioController],
  providers: [
    {
      provide: AbstractUsuarioRepository,
      useClass: UsuarioRepository
    },
    {
      provide: AbstractUsuarioService,
      useClass: UsuarioService
    }
  ],
})
export class AppModule {}
