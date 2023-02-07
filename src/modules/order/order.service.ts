import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../product/entities/product.entity';
import { User } from '../user/entities/user.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { orderItem } from './entities/order_item.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private readonly order: Repository<Order>,
    @InjectRepository(orderItem)
    private readonly orderItem: Repository<orderItem>,
    @InjectRepository(User)
    private readonly user: Repository<User>,
    @InjectRepository(Product)
    private readonly product: Repository<Product>,
  ) {}
  //未完成
  async create(createOrderDto: CreateOrderDto) {
    const data = new Order();
    data.orderType = createOrderDto.orderType;
    data.orderStatus = createOrderDto.orderStatus;
    data.totalPrice = createOrderDto.totalPrice;
    data.user = await this.user.findOne({
      where: {
        id: createOrderDto.userId,
      },
    });
    const result = await this.order.save(data);

    createOrderDto.itemList.forEach(async (item) => {
      let order_item = new orderItem();
      order_item.item = await this.product.findOne({
        where: {
          id: item.itemId,
        },
      });
      order_item.order = data;
      order_item.property = item.property;
      await this.orderItem.save(order_item);
    });
    return result;
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
