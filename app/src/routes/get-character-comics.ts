import { Context } from 'koa';
import * as Joi from '@hapi/joi';

import { Character, Comics } from '../models';

const schema = Joi.object({
  slug: Joi.string().required(),
});

export const getCharacterComics = async (ctx: Context) => {
  const { slug } = await schema.validateAsync(ctx.params);
  const character = await Character.bySlug(slug);
  ctx.body = await Comics.byCharacterId(character.id);
};
