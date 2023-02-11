import { Product } from 'src/modules/product/entities/product.entity';
import { User } from 'src/modules/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  Timestamp,
} from 'typeorm';
import { orderItem } from './order_item.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @OneToMany(() => orderItem, (orderItem) => orderItem.order)
  orderItems: orderItem[];
  @Column()
  totalPrice: number;
  @Column()
  orderType: string;
  @Column()
  orderStatus: number;
  @CreateDateColumn()
  createDate: Date;
  @UpdateDateColumn()
  updateDate: Date;
  @Column({ type: 'timestamp', nullable: true })
  completeTime: Timestamp;
}
