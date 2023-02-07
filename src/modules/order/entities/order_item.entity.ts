import { Product } from 'src/modules/product/entities/product.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class orderItem {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Order, (order) => order.orderItems)
  order: Order;
  //manytoone
  @ManyToOne(() => Product)
  @JoinColumn()
  item: Product;
  @Column()
  property: string;
}
