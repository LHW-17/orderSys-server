import { Test, TestingModule } from '@nestjs/testing';
import { MiniappService } from './miniapp.service';

describe('MiniappService', () => {
  let service: MiniappService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MiniappService],
    }).compile();

    service = module.get<MiniappService>(MiniappService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
