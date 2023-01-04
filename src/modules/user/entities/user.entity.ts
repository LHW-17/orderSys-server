import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userName: string;
  @Column()
  userPhone: string;
  @Column()
  userAddress: string;
  @Column()
  openid: string;
}
