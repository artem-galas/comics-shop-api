import { ComicsOrderWithComics } from '../models';

interface IComicsOrderDto {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export class ComicsOrderDto implements IComicsOrderDto {
  id: number;
  title: string;
  price: number;
  quantity: number;

  constructor(comicsOrder: ComicsOrderWithComics) {
    this.id = comicsOrder.id;
    this.title = comicsOrder.title;
    this.price = comicsOrder.price;
    this.quantity = comicsOrder.quantity;
  }
}
