import { Category } from 'src/modules/category/entities/category.entity';
import { CustomizeData } from 'src/modules/customize_data/entities/customize_data.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  itemName: string;
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  primaryPrice: number;
  @Column('int')
  inventory: number;
  @ManyToOne(() => Category)
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
