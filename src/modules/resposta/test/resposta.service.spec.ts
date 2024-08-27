import { Test, TestingModule } from '@nestjs/testing';
import { RespostaService } from '../services/pergunta.service';
import { RespostaMockRepository } from '../repositories/resposta.mock.repository';
import { AbstractRespostaRepository } from '../abstract/resposta.abstract.repository';
import { CreateRespostaDto } from '../dto/createResposta.dto';
import { Resposta } from '../../../database/entities/resposta.entity';
import { UpdateRespostaDto } from '../dto/updateResposta.dto';
import { FindRespostaDto } from '../dto/findResposta.dto';

describe('RespostaService', () => {
  let service: RespostaService;
  let repository: RespostaMockRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RespostaService,
        {
          provide: AbstractRespostaRepository,
          useClass: RespostaMockRepository,
        },
      ],
    }).compile();

    service = module.get<RespostaService>(RespostaService);
    repository = module.get<AbstractRespostaRepository>(
      AbstractRespostaRepository,
    ) as RespostaMockRepository;
  });

  describe('create', () => {
    it('should create a Resposta and return it', async () => {
      const respostaDto: CreateRespostaDto = {
        resposta: 'Amo ler quadrinhos, estou lendo homem aranha atualmente'
      };

      const result = await service.create(respostaDto);
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(Resposta);
      expect(result.resposta).toEqual(respostaDto.resposta);
    });
  });

  describe('update', () => {
    it('should update a Resposta and return it', async () => {
      const respostaDto: UpdateRespostaDto = {
        id: 1,
        resposta: 'Não gosto de ler mangá, mas já li um pouco de dragon ball',
      };

      const result = await service.update(respostaDto);
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(Resposta);
      expect(result.resposta).toEqual(respostaDto.resposta);
    });
  });

  describe('findBy', () => {
    it('should return a list of Resposta', async () => {
      const respostaDto: FindRespostaDto = {};

      const result = await service.findBy(respostaDto);
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).toBeInstanceOf(Resposta);
    });
  });
});
