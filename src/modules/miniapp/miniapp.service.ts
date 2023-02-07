import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../category/entities/category.entity';
import { Product } from '../product/entities/product.entity';

@Injectable()
export class MiniappService {
  constructor(
    @InjectRepository(Product) private readonly product: Repository<Product>,
    @InjectRepository(Category) private readonly category: Repository<Category>,
  ) {}

  async tree() {
    let data = await this.category.find();
    // console.log(data);
    const res = await Promise.all(
      data.map(async (item) => {
        const products = (await this.product
          .createQueryBuilder('product')
          .leftJoinAndSelect('product.properties', 'product_property')
          .where('product.category.id=:category', { category: item.id })
          .getMany()) as Product[];

        // const products = await this.product.find({
        //   where: {
        //     category: item,
        //   },
        // });
        item.products = products.sort((a, b) => {
          return a.orderIndex - b.orderIndex;
        });

        return item;
      }),
    );
    return res.sort((a, b) => {
      return a.show_index - b.show_index;
    });
  }
}
