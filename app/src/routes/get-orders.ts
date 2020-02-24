import { Context } from 'koa';
import { ComicsOrder, Order } from '../models';
import * as Joi from '@hapi/joi';
import { OrderDto } from '../dto';

const schema = Joi.object({
  id: Joi.string().required(),
});

export const getOrders = async (ctx: Context) => {
  const { id } = await schema.validateAsync(ctx.params);
  const order = await Order.byId(id);
  const comics = await ComicsOrder.withComics(order.id);

  ctx.body = new OrderDto(order, comics);
};
