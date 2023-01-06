export class CreateProductDto {
  itemName: string;
  primaryPrice: number;
  inventory: number;
  is_selling: boolean;
  categoryId: number;
  orderIndex: number;
  itemDesc: string;
  itemImg: string;
  // properties: Property[];
}
