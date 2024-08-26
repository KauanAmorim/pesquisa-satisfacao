import { Test, TestingModule } from '@nestjs/testing';
import { Usuario } from '../../../database/entities/usuario.entity';
import { PerguntaService } from '../services/pergunta.service';
import { PerguntaMockRepository } from '../repositories/pergunta.mock.repository';
import { CreatePerguntaDto } from '../dto/createPergunta.dto';
import { AbstractPerguntaRepository } from '../abstract/pergunta.abstract.repository';
import { Pergunta } from '../../../database/entities/pergunta.entity';
import { UpdatePerguntaDto } from '../dto/updatePergunta.dto';
import { FindPerguntaDto } from '../dto/findPergunta.dto';

describe('PerguntaService', () => {
  let service: PerguntaService;
  let repository: PerguntaMockRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PerguntaService,
        {
          provide: AbstractPerguntaRepository,
          useClass: PerguntaMockRepository,
        },
      ],
    }).compile();

    service = module.get<PerguntaService>(PerguntaService);
    repository = module.get<AbstractPerguntaRepository>(
      AbstractPerguntaRepository,
    ) as PerguntaMockRepository;
  });

  describe('create', () => {
    it('should create a user and return it', async () => {
      const perguntaDto: CreatePerguntaDto = {
        pergunta: 'Você gosta de ler quadrinho?',
        ativo: true,
        obrigatorio: false
      };

      const result = await service.create(perguntaDto);
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(Pergunta);
      expect(result.pergunta).toEqual(perguntaDto.pergunta);
      expect(result.ativo).toEqual(perguntaDto.ativo);
      expect(result.obrigatorio).toEqual(perguntaDto.obrigatorio);
    });
  });

  describe('update', () => {
    it('should update a user and return it', async () => {
      const perguntaDto: UpdatePerguntaDto = {
        id: 1,
        pergunta: 'Você gota de ler mangá?',
        ativo: true,
        obrigatorio: true,
      };

      const result = await service.update(perguntaDto);
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(Pergunta);
      expect(result.pergunta).toEqual(perguntaDto.pergunta);
      expect(result.ativo).toEqual(perguntaDto.ativo);
      expect(result.obrigatorio).toEqual(perguntaDto.obrigatorio);
    });
  });

  describe('findBy', () => {
    it('should return a list of users', async () => {
      const perguntaDto: FindPerguntaDto = {
        ativo: true
      };

      const result = await service.findBy(perguntaDto);
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).toBeInstanceOf(Pergunta);
    });
  });
});
