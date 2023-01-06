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
    data.show_status = createCategoryDto.show_status;
    data.show_index = createCategoryDto.show_index;
    return this.category.save(data);
  }

  findAll() {
    return this.category.find();
  }

  findOne(id: number) {
    return this.category.find({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.category.update(id, updateCategoryDto);
  }

  async updateShow(id: number) {
    let [data] = await this.category.find({
      where: {
        id: id,
      },
    });
    data.show_status = !data.show_status;
    return this.category.update(id, data);
  }

  remove(id: number) {
    return this.category.delete(id);
  }
}
