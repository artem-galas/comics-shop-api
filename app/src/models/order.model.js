import { pg, Tables } from '../db';
import { Comics } from './comics.model';
import { ServerError } from '../util/serverError';
import { ComicsOrder } from './comics-order.model';

export class Order {
  static async create(data) {
    const amount = await data.reduce(async (prev, current) => {
      const comics = await Comics.byId(current.comicsId);
      const price = comics.price * current.quantity;
      let totalPrice = await prev;
      return totalPrice += price;
    }, Promise.resolve(0));

    const [order] = await pg(Tables.orders)
      .insert({amount}, ['id', 'amount']);

    const comicsOrdersData = data.map((cur)  => {
      return {
        order_id: order.id,
        comics_id: cur.comicsId,
        quantity: cur.quantity,
      }
    });

    await ComicsOrder.create(comicsOrdersData);

    return {...order}
  }

  static async byId(id) {
    const order = await pg(Tables.orders)
      .where({id})
      .first();

    return order;
  }
}
