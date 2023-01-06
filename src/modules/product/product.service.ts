import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Category } from '../category/entities/category.entity';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private readonly product: Repository<Product>,
    @InjectRepository(Category) private readonly category: Repository<Category>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    const data = new Product();
    data.itemName = createProductDto.itemName;
    data.primaryPrice = createProductDto.primaryPrice;
    data.inventory = createProductDto.inventory;
    data.is_selling = createProductDto.is_selling;
    data.category = await this.category.findOne({
      where: {
        id: createProductDto.categoryId,
      },
    });
    data.orderIndex = createProductDto.orderIndex;
    data.itemDesc = createProductDto.itemDesc;
    data.itemImg = createProductDto.itemImg;
    return this.product.save(data);
  }

  findAll() {
    return this.product.find({
      relations: ['category'],
    });
  }

  findOne(id: number) {
    return this.product.find({
      where: {
        id,
      },
      relations: ['category'],
    });
  }

  async updateShowStatus(id: number) {
    const data = await this.product.findOne({
      where: {
        id,
      },
    });
    data.is_selling = !data.is_selling;
    return this.product.update(id, data);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.product.update(id, updateProductDto);
  }

  remove(id: number) {
    return this.product.delete(id);
  }
}
