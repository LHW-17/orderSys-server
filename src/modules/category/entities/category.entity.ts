import { Product } from 'src/modules/product/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  categoryName: string;
  @Column()
  show_index: number;
  @Column()
  show_status: boolean;
  @OneToMany(() => Product, (Product) => Product.category)
  products: Product[];
}
