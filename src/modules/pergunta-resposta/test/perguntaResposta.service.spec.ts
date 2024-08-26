import { Test, TestingModule } from '@nestjs/testing';
import { PerguntaRespostaService } from '../services/perguntaResposta.service';
import { PerguntaRespostaRepository } from '../repositories/perguntaResposta.repository';
import { AbstractPerguntaRespostaRepository } from '../abstract/perguntaResposta.abstract.respository';
import { PerguntaRespostaMockRepository } from '../repositories/perguntaResposta.mock.repository';
import { CreatePerguntaRespostaDto } from '../dto/createPerguntaResposta.dto';
import { PerguntaResposta } from '../../../database/entities/perguntaResposta.entity';
import { UpdatePerguntaRespostaDto } from '../dto/updatePerguntaResposta.dto';
import { FindPerguntaRespostaDto } from '../dto/findPerguntaResposta.dto';

describe('PerguntaRespostaService', () => {
  let service: PerguntaRespostaService;
  let repository: PerguntaRespostaMockRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PerguntaRespostaService,
        {
          provide: AbstractPerguntaRespostaRepository,
          useClass: PerguntaRespostaMockRepository,
        },
      ],
    }).compile();

    service = module.get<PerguntaRespostaService>(PerguntaRespostaService);
    repository = module.get<AbstractPerguntaRespostaRepository>(
      AbstractPerguntaRespostaRepository,
    ) as PerguntaRespostaMockRepository;
  });

  describe('create', () => {
    it('should create a user and return it', async () => {
      const perguntaRespostaDto: CreatePerguntaRespostaDto = {
        idPesquisa: 1,
        idPergunta: 1,
        idResposta: 1,
      };

      const result = await service.create(perguntaRespostaDto);
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(PerguntaResposta);
      expect(result.idPesquisa).toEqual(perguntaRespostaDto.idPesquisa);
      expect(result.idPergunta).toEqual(perguntaRespostaDto.idPergunta);
      expect(result.idResposta).toEqual(perguntaRespostaDto.idResposta);
    });
  });

  describe('update', () => {
    it('should update a user and return it', async () => {
      const perguntaRespostaDto: UpdatePerguntaRespostaDto = {
        id: 1,
        idPesquisa: 1,
        idPergunta: 1,
        idResposta: 2,
      };

      const result = await service.update(perguntaRespostaDto);
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(PerguntaResposta);
      expect(result.idPesquisa).toEqual(perguntaRespostaDto.idPesquisa);
      expect(result.idPergunta).toEqual(perguntaRespostaDto.idPergunta);
      expect(result.idResposta).toEqual(perguntaRespostaDto.idResposta);
    });
  });

  describe('findBy', () => {
    it('should return a list of users', async () => {
      const perguntaRespostaDto: FindPerguntaRespostaDto = {};

      const result = await service.findBy(perguntaRespostaDto);
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).toBeInstanceOf(PerguntaResposta);
    });
  });
});
