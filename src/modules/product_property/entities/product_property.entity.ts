import { Product } from 'src/modules/product/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PropertyName } from 'src/enum';

@Entity()
export class ProductProperty {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Product)
  product: Product;
  @Column({
    type: 'enum',
    enum: PropertyName,
    default: 0,
  })
  name: string;
  @Column()
  option: string;
  @Column()
  is_default: boolean;
  @Column({
    default: 0,
  })
  extra_price: number;
}
