import { Test, TestingModule } from '@nestjs/testing';
import { CustomizeDataController } from './customize_data.controller';
import { CustomizeDataService } from './customize_data.service';

describe('CustomizeDataController', () => {
  let controller: CustomizeDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomizeDataController],
      providers: [CustomizeDataService],
    }).compile();

    controller = module.get<CustomizeDataController>(CustomizeDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
