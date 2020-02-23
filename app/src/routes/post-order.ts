import * as Joi from '@hapi/joi';
import { Context } from 'koa';

import { Order } from '../models';

const schema = Joi.object({
  order: Joi.array().items(
    Joi.object({
      comicsId: Joi.number().required(),
      quantity: Joi.number().required()
    })
  )
});

interface OrderRequestDTO {
  order: {
    comicsId: number;
    quantity: number;
  }[];
}

export const postOrder = async (ctx: Context) => {
  const { order } = await schema.validateAsync(ctx.request.body) as OrderRequestDTO;
  ctx.body = await Order.create(order);
};
