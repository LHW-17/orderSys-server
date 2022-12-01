import { Test, TestingModule } from '@nestjs/testing';
import { CustomizeDataService } from './customize_data.service';

describe('CustomizeDataService', () => {
  let service: CustomizeDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomizeDataService],
    }).compile();

    service = module.get<CustomizeDataService>(CustomizeDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
