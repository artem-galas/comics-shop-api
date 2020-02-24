import { pg, Tables } from '../db';
import { ComicsModel } from './comics.model';

export interface ComicsOrderModel {
  id: number;
  comics_id: number;
  order_id: number;
  quantity: number;
}

export type ComicsOrderWithComics = Pick<ComicsModel, 'id' | 'title' | 'price'>
  & Pick<ComicsOrderModel, 'quantity'>;

export type ComicsOrderCreateType = Omit<ComicsOrderModel, 'id'>;

export class ComicsOrder {
  static async create(data: ComicsOrderCreateType[]) {
    return pg<ComicsOrderModel>(Tables.comics_orders)
      .insert(data, ['id']);
  }

  static async byOrderId(orderId: number) {
    return this.byOrderIdQuery(orderId);
  }

  static async withComics(orderId: number): Promise<ComicsOrderWithComics[]> {
    return this.byOrderIdQuery(orderId)
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
  }

  private static byOrderIdQuery(orderId: number) {
    return pg<ComicsOrderModel>('comics_orders')
      .where({order_id: orderId})
  }

}
