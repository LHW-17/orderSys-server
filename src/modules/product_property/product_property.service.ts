import { Injectable } from '@nestjs/common';
import { CreateProductPropertyDto } from './dto/create-product_property.dto';
import { UpdateProductPropertyDto } from './dto/update-product_property.dto';

@Injectable()
export class ProductPropertyService {
  create(createProductPropertyDto: CreateProductPropertyDto) {
    return 'This action adds a new productProperty';
  }

  findAll() {
    return `This action returns all productProperty`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productProperty`;
  }

  update(id: number, updateProductPropertyDto: UpdateProductPropertyDto) {
    return `This action updates a #${id} productProperty`;
  }

  remove(id: number) {
    return `This action removes a #${id} productProperty`;
  }
}
