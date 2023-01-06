import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../product/entities/product.entity';
import { CreateProductPropertyDto } from './dto/create-product_property.dto';
import { UpdateProductPropertyDto } from './dto/update-product_property.dto';
import { ProductProperty } from './entities/product_property.entity';

@Injectable()
export class ProductPropertyService {
  constructor(
    @InjectRepository(ProductProperty)
    private readonly productProperty: Repository<ProductProperty>,
    @InjectRepository(Product) private readonly product: Repository<Product>,
  ) {}

  async create(createProductPropertyDto: CreateProductPropertyDto) {
    const data = new ProductProperty();
    data.name = createProductPropertyDto.name;
    data.option = createProductPropertyDto.option;
    data.extra_price = createProductPropertyDto.extra_price;
    data.is_default = createProductPropertyDto.is_default;
    data.product = await this.product.findOne({
      where: {
        id: createProductPropertyDto.productId,
      },
    });

    return this.productProperty.save(data);
  }

  findAll() {
    return this.productProperty.find();
  }

  findOne(id: number) {
    return this.productProperty.findOne({
      where: {
        id: id,
      },
    });
  }

  async findClass(id: number, name: string) {
    let product = await this.product.findOne({
      where: {
        id: id,
      },
    });
    return this.productProperty.find({
      where: {
        product: product,
        name: name,
      },
    });
  }

  update(id: number, updateProductPropertyDto: UpdateProductPropertyDto) {
    return this.productProperty.update(id, updateProductPropertyDto);
  }

  remove(id: number) {
    return this.productProperty.delete(id);
  }
}
