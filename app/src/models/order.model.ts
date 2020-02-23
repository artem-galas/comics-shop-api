import { pg, Tables } from '../db';
import { Comics, ComicsModel } from './comics.model';
import { ServerError } from '../util/serverError';

export interface OrderModel {
  id: number;
  amount: number;
}

export interface ComicsOrderModel {
  id: number;
  comics_id: number;
  order_id: number;
  quantity: number;
}

type OrderCreateType = {
  comicsId: number,
  quantity: number;
}[];

type OrderComics = Pick<ComicsModel, 'id' | 'title' | 'price'>
  & Pick<ComicsOrderModel, 'quantity'>

export class Order {
  static async create(data: OrderCreateType) {
    const amount = await data.reduce(async (prev, current) => {
      const comics = await Comics.byId(current.comicsId);
      const price = comics.price * current.quantity;
      let totalPrice = await prev;
      return totalPrice += price;
    }, Promise.resolve(0));

    const [order] = await pg<OrderModel>(Tables.orders)
      .insert({amount}, ['id', 'amount']);

    const comicsOrdersData = data.map((cur): Omit<ComicsOrderModel, 'id'> => {
      return {
        order_id: order.id,
        comics_id: cur.comicsId,
        quantity: cur.quantity,
      }
    });

    await pg<ComicsOrderModel>(Tables.comics_orders)
      .insert(comicsOrdersData);

    return {...order}
  }

  static async byId(id: number) {
    const order = await pg<OrderModel>(Tables.orders)
      .where({id})
      .first();

    if (!order) {
      throw new ServerError({
        message: 'Order not Found',
        status: 404,
      })
    }

    const comics: OrderComics = await pg<ComicsOrderModel>('comics_orders')
      .where({order_id: order.id})
      .from<ComicsModel>(Tables.comics)
      .innerJoin(
        Tables.comics_orders,
        'comics.id',
        'comics_orders.comics_id'
      ).select(
        'comics.id',
        'comics.title',
        'comics.price',
        'comics_orders.quantity'
      );

    return {
      id: order.id,
      amount: order.amount,
      comics,
    }
  }
}
