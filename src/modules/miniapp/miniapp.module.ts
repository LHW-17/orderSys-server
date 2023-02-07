import { Module } from '@nestjs/common';
import { MiniappService } from './miniapp.service';
import { MiniappController } from './miniapp.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../product/entities/product.entity';
import { Category } from '../category/entities/category.entity';
import { ProductProperty } from '../product_property/entities/product_property.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category, ProductProperty])],
  controllers: [MiniappController],
  providers: [MiniappService],
})
export class MiniappModule {}
