import { Product } from 'src/modules/product/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  categoryName: string;
  @Column()
  categoryDesc: string;
  @Column()
  categoryOrderIndex: number;
  @OneToMany(() => Product, (Product) => Product.category)
  products: Product[];
}
