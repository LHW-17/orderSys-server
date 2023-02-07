import { Test, TestingModule } from '@nestjs/testing';
import { MiniappController } from './miniapp.controller';
import { MiniappService } from './miniapp.service';

describe('MiniappController', () => {
  let controller: MiniappController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MiniappController],
      providers: [MiniappService],
    }).compile();

    controller = module.get<MiniappController>(MiniappController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
