import { Product } from 'src/modules/product/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ProductProperty {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Product)
  product: Product;
  @Column()
  name: string;
  @Column()
  option: string;
  @Column({
    default: false,
  })
  is_default: boolean;
  @Column({
    default: 0,
  })
  extra_price: number;
}
