import { Context } from 'koa';
import * as Joi from '@hapi/joi';

import { Character, Comics } from '../models';
import { ComicsDto } from '../dto';

const schema = Joi.object({
  slug: Joi.string().required(),
});

export const getCharacterComics = async (ctx: Context) => {
  const { slug } = await schema.validateAsync(ctx.params);
  const character = await Character.bySlug(slug);
  const comics = await Comics.byCharacterId(character.id);

  ctx.body = comics.map((cur) => new ComicsDto(cur));
};
