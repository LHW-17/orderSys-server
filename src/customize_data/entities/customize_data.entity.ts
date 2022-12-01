import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type CustomOption = {
  name: string;
  price: number;
};
@Entity()
export class CustomizeData {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  itemId: number;
  @Column('simple-json')
  sizeOptions: CustomOption[];
  @Column('simple-json')
  temperatureOptions: CustomOption[];
  @Column('simple-json')
  sweetnessOptions: CustomOption[];
  @Column('simple-json')
  enrichOptions: CustomOption[];
}
