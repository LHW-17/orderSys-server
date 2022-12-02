import { Product } from 'src/product/entities/product.entity';
import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

export type CustomOption = {
  name: string;
  price: number;
};
@Entity()
export class CustomizeData {
  @PrimaryGeneratedColumn()
  id: number;
  /* @OneToOne(() => Product)
  @JoinColumn()
  product: Product; */
  @Column('simple-json')
  sizeOptions: CustomOption[];
  @Column('simple-json')
  temperatureOptions: CustomOption[];
  @Column('simple-json')
  sweetnessOptions: CustomOption[];
  @Column('simple-json')
  enrichOptions: CustomOption[];
}
