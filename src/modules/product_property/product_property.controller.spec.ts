import { Test, TestingModule } from '@nestjs/testing';
import { ProductPropertyController } from './product_property.controller';
import { ProductPropertyService } from './product_property.service';

describe('ProductPropertyController', () => {
  let controller: ProductPropertyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductPropertyController],
      providers: [ProductPropertyService],
    }).compile();

    controller = module.get<ProductPropertyController>(ProductPropertyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
