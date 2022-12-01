import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  categoryName: string;
  @Column()
  categoryDesc: string;
  @Column()
  categoryOrderIndex: number;
}
