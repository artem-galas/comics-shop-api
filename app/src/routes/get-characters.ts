import { Context } from 'koa';

import { Character } from '../models';

export const getCharacters = async (ctx: Context) => {
  ctx.body = await Character.all();
};
