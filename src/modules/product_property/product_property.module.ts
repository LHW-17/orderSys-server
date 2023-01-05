import { Module } from '@nestjs/common';
import { ProductPropertyService } from './product_property.service';
import { ProductPropertyController } from './product_property.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductProperty } from './entities/product_property.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductProperty])],
  controllers: [ProductPropertyController],
  providers: [ProductPropertyService],
})
export class ProductPropertyModule {}
