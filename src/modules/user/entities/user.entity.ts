import { Order } from 'src/modules/order/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userName: string;
  @Column()
  userPhone: string;
  @Column()
  avatarUrl: string;
  @Column({
    default: '',
  })
  userAddress: string;
  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
