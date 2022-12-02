import { Category } from 'src/category/entities/category.entity';
import { CustomizeData } from 'src/customize_data/entities/customize_data.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  itemName: string;
  @Column()
  primaryPrice: number;
  @OneToOne(() => Category)
  @JoinColumn()
  category: Category;
  @OneToOne(() => CustomizeData)
  @JoinColumn()
  customizeData: CustomizeData;
  @Column()
  itemCategoryName: string;
  @Column()
  orderIndex: number;
  @Column()
  itemDesc: string;
  @Column()
  itemImg: string;
}
