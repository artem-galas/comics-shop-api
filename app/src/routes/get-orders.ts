import { Context } from 'koa';
import { Order } from '../models';
import * as Joi from '@hapi/joi';

const schema = Joi.object({
  id: Joi.string().required(),
});

export const getOrders = async (ctx: Context) => {
  const { id } = await schema.validateAsync(ctx.params);
  ctx.body = await Order.byId(id);
};
