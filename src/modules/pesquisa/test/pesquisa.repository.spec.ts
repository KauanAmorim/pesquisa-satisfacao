import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Pesquisa } from '../../../database/entities/pesquisa.entity';
import { CreatePesquisaDto } from '../dto/createPesquisa.dto';
import { UpdatePesquisaDto } from '../dto/updatePesquisa.dto';
import { FindPesquisaDto } from '../dto/findPesquisa.dto';
import { PesquisaMockRepository } from '../repositories/pesquisa.mock.repository';

describe('PesquisaMockRepository', () => {
  let repository: PesquisaMockRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PesquisaMockRepository,
        {
          provide: getRepositoryToken(Pesquisa),
          useClass: Repository,
        },
      ],
    }).compile();

    repository = module.get<PesquisaMockRepository>(PesquisaMockRepository);
  });

  it('should create a new Pesquisa', async () => {
    const createPesquisaDto: CreatePesquisaDto = {
      nome: 'Nova Pesquisa',
      ativo: true,
      id_usuario: 1,
    };

    const result = await repository.create(createPesquisaDto);

    expect(result).toEqual({
      nome: 'Nova Pesquisa',
      ativo: true,
      id_usuario: 1,
    });
  });

  it('should update an existing Pesquisa', async () => {
    const updatePesquisaDto: UpdatePesquisaDto = {
      id: 2,
      nome: 'Pesquisa Atualizada',
      ativo: false,
      id_usuario: 1,
    };

    const result = await repository.update(updatePesquisaDto);

    expect(result).toEqual({
      nome: 'Pesquisa Atualizada',
      ativo: false,
      id_usuario: 1,
    });
  });

  it('should return a list of Pesquisa', async () => {
    const findPesquisaDto: FindPesquisaDto = {
      id_usuario: 1,
      ativo: true,
    };

    const result = await repository.findBy(findPesquisaDto);

    expect(result).toEqual([
      {
        nome: 'Pesquisa de segurança social',
        ativo: true,
        id_usuario: 1,
      },
      {
        nome: 'Pesquisa de satisfacao',
        ativo: true,
        id_usuario: 1,
      },
    ]);
  });
});
