import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioService } from '../services/usuario.service';
import { UsuarioMockRepository } from '../repositories/usuario.mock.repository';
import { AbstractUsuarioRepository } from '../abstract/usuario.abstract.repository';
import { CreateUsuarioDto } from '../dto/createUsuario.dto';
import { UpdateUsuarioDto } from '../dto/updateUsuario.dto';
import { FindUsuarioDto } from '../dto/findUsuario.dto';
import { Usuario } from '../../../database/entities/usuario.entity';

describe('UsuarioService', () => {
  let service: UsuarioService;
  let repository: UsuarioMockRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsuarioService,
        {
          provide: AbstractUsuarioRepository,
          useClass: UsuarioMockRepository,
        },
      ],
    }).compile();

    service = module.get<UsuarioService>(UsuarioService);
    repository = module.get<AbstractUsuarioRepository>(
      AbstractUsuarioRepository,
    ) as UsuarioMockRepository;
  });

  describe('create', () => {
    it('should create a user and return it', async () => {
      const usuarioDto: CreateUsuarioDto = {
        cpf: '12345678910',
        nome: 'Test User',
        email: 'test@user.com',
        data_nascimento: new Date(),
        genero: 'masculino',
      };

      const result = await service.create(usuarioDto);
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(Usuario);
      expect(result.cpf).toEqual(usuarioDto.cpf);
      expect(result.nome).toEqual(usuarioDto.nome);
    });
  });

  describe('update', () => {
    it('should update a user and return it', async () => {
      const usuarioDto: UpdateUsuarioDto = {
        id: 1,
        cpf: '12345678910',
        nome: 'Updated User',
        email: 'updated@user.com',
        data_nascimento: new Date(),
        genero: 'feminino',
      };

      const result = await service.update(usuarioDto);
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(Usuario);
      expect(result.nome).toEqual(usuarioDto.nome);
      expect(result.email).toEqual(usuarioDto.email);
    });
  });

  describe('findBy', () => {
    it('should return a list of users', async () => {
      const usuarioDto: FindUsuarioDto = {
        cpf: '12345678910',
      };

      const result = await service.findBy(usuarioDto);
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).toBeInstanceOf(Usuario);
    });
  });
});
