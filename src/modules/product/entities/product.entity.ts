import { Category } from 'src/modules/category/entities/category.entity';
import { ProductProperty } from 'src/modules/product_property/entities/product_property.entity';
import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  itemName: string;
  @Column()
  primaryPrice: number;
  @Column('int')
  inventory: number;
  @Column()
  is_selling: boolean;
  @ManyToOne(() => Category)
  @JoinColumn()
  category: Category;
  @Column()
  itemCategoryName: string;
  @Column()
  orderIndex: number;
  @Column()
  itemDesc: string;
  @Column()
  itemImg: string;
  @OneToMany(() => ProductProperty, (properties) => properties.product)
  properties: ProductProperty[];
}
