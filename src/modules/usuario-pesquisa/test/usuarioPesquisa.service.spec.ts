import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioPesquisaMockRepository } from '../repositories/usuarioPesquisa.mock.repository';
import { UsuarioPesquisaService } from '../services/usuarioPesquisa.service';
import { AbstractUsuarioPesquisaRepository } from '../abstract/usuarioPesquisa.abstract.respository';
import { CreateUsuarioPesquisaDto } from '../dto/createUsuarioPesquisa.dto';
import { UpdateUsuarioPesquisaDto } from '../dto/updateUsuarioPesquisa.dto';
import { FindUsuarioPesquisaDto } from '../dto/findUsuarioPesquisa.dto';
import { UsuarioPesquisa } from '../../../database/entities/usuarioPesquisa.entity';

describe('UsuarioPesquisaService', () => {
  let service: UsuarioPesquisaService;
  let repository: UsuarioPesquisaMockRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsuarioPesquisaService,
        {
          provide: AbstractUsuarioPesquisaRepository,
          useClass: UsuarioPesquisaMockRepository,
        },
      ],
    }).compile();

    service = module.get<UsuarioPesquisaService>(UsuarioPesquisaService);
    repository = module.get<AbstractUsuarioPesquisaRepository>(
      AbstractUsuarioPesquisaRepository,
    ) as UsuarioPesquisaMockRepository;
  });

  describe('create', () => {
    it('should create a UsuarioPesquisa and return it', async () => {
      const usuarioPesquisaDto: CreateUsuarioPesquisaDto = {
        idUsuario: 1,
        idPesquisa: 1,
      };

      const result = await service.create(usuarioPesquisaDto);
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(UsuarioPesquisa);
      expect(result.idUsuario).toEqual(usuarioPesquisaDto.idUsuario);
      expect(result.idPesquisa).toEqual(usuarioPesquisaDto.idPesquisa);
    });
  });

  describe('update', () => {
    it('should update a UsuarioPesquisa and return it', async () => {
      const usuarioPesquisaDto: UpdateUsuarioPesquisaDto = {
        id: 1,
        idUsuario: 1,
        idPesquisa: 1,
      };

      const result = await service.update(usuarioPesquisaDto);
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(UsuarioPesquisa);
      expect(result.idUsuario).toEqual(usuarioPesquisaDto.idUsuario);
      expect(result.idPesquisa).toEqual(usuarioPesquisaDto.idPesquisa);
    });
  });

  describe('findBy', () => {
    it('should return a list of UsuarioPesquisa', async () => {
      const usuarioPesquisaDto: FindUsuarioPesquisaDto = {};

      const result = await service.findBy(usuarioPesquisaDto);
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).toBeInstanceOf(UsuarioPesquisa);
    });
  });
});
