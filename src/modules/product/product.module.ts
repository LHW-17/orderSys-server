import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Category } from '../category/entities/category.entity';
import { ProductProperty } from '../product_property/entities/product_property.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category, ProductProperty])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
