import { pg, Tables } from '../db';
import { Comics } from './comics.model';
import { ServerError } from '../util/serverError';
import { ComicsOrder, ComicsOrderCreateType } from './comics-order.model';

export interface OrderModel {
  id: number;
  amount: number;
}

type OrderCreateType = {
  comicsId: number,
  quantity: number;
}[];

export class Order {
  static async create(data: OrderCreateType): Promise<OrderModel> {
    const amount = await data.reduce(async (prev, current) => {
      const comics = await Comics.byId(current.comicsId);
      const price = comics.price * current.quantity;
      let totalPrice = await prev;
      return totalPrice += price;
    }, Promise.resolve(0));

    const [order] = await pg<OrderModel>(Tables.orders)
      .insert({amount}, ['id', 'amount']);

    const comicsOrdersData = data.map((cur): ComicsOrderCreateType  => {
      return {
        order_id: order.id,
        comics_id: cur.comicsId,
        quantity: cur.quantity,
      }
    });

    await ComicsOrder.create(comicsOrdersData);

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

    return order;
  }
}
