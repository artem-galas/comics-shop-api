import { ComicsOrderWithComics, OrderModel } from '../models';
import { ComicsOrderDto } from './comics-order.dto';

interface IOrderDto {
  id: number;
  amount: number;
  comics: ComicsOrderDto[];
}

export class OrderDto implements IOrderDto {
  id: number;
  amount: number;
  comics: ComicsOrderDto[];

  constructor(order: OrderModel, comicsOrder: ComicsOrderWithComics[]) {
    this.id = order.id;
    this.amount = order.amount;
    this.comics = comicsOrder.map(cur => new ComicsOrderDto(cur))
  }
}
