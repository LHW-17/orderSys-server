import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private readonly category: Repository<Category>,
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    const data = new Category();
    data.categoryName = createCategoryDto.categoryName;
    data.categoryDesc = createCategoryDto.categoryDesc;
    data.categoryOrderIndex = createCategoryDto.categoryOrderIndex;
    return this.category.save(data);
  }

  findAll() {
    return this.category.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
