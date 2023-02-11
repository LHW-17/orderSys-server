class itemDto {
  itemId: number;
  itemImg: string;
  itemDesc: string;
  itemName: string;
  price: number;
  property: string;
  totalPrice: string;
}
export class CreateOrderDto {
  totalPrice: number;
  itemList: itemDto[];
  orderType: string;
  orderStatus: number;
  userId: number;
}
