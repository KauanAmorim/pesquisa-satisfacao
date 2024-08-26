import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioMockRepository } from '../repositories/usuario.mock.repository';
import { CreateUsuarioDto } from '../dto/createUsuario.dto';
import { UpdateUsuarioDto } from '../dto/updateUsuario.dto';
import { FindUsuarioDto } from '../dto/findUsuario.dto';
import { Usuario } from '../../../database/entities/usuario.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('UsuarioMockRepository', () => {
  let repository: UsuarioMockRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsuarioMockRepository,
        {
          provide: getRepositoryToken(Usuario),
          useClass: Repository,
        },
      ],
    }).compile();

    repository = module.get<UsuarioMockRepository>(UsuarioMockRepository);
  });

  it('should create a new Usuario', async () => {
    const usuarioDto: CreateUsuarioDto = {
      cpf: '12345678910',
      nome: 'Test User',
      email: 'test@user.com',
      data_nascimento: new Date(),
      genero: 'masculino',
    };

    const result = await repository.create(usuarioDto);

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Usuario);
    expect(result.cpf).toEqual(usuarioDto.cpf);
    expect(result.nome).toEqual(usuarioDto.nome);
  });

  it('should update an existing Usuario', async () => {
    const usuarioDto: UpdateUsuarioDto = {
      id: 1,
      cpf: '12345678910',
      nome: 'Updated User',
      email: 'updated@user.com',
      data_nascimento: new Date(),
      genero: 'feminino',
    };

    const result = await repository.update(usuarioDto);
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Usuario);
    expect(result.nome).toEqual(usuarioDto.nome);
    expect(result.email).toEqual(usuarioDto.email);
  });

  it('should return a list of Usuario', async () => {
    const findUsuarioDto: FindUsuarioDto = {
      cpf: '12345678910',
    };

    const result = await repository.findBy(findUsuarioDto);
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toBeInstanceOf(Usuario);
  });
});
