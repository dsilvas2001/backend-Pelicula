import { Test, TestingModule } from '@nestjs/testing';
import { PeliculaController } from './pelicula.controller';

describe('PeliculaController', () => {
  let controller: PeliculaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeliculaController],
    }).compile();

    controller = module.get<PeliculaController>(PeliculaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
