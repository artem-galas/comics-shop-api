import { Context } from 'koa';
import * as Joi from '@hapi/joi';

import { ServerError } from '../util/serverError';
import { Character, Comics } from '../models';

const schema = Joi.object({
  slug: Joi.string().required(),
});

export const getCharacterComics = async (ctx: Context) => {
  const { slug } = await schema.validateAsync(ctx.params);
  const character = await Character.bySlug(slug);

  if (character) {
    ctx.body = await Comics.byCharacterId(character.id);
    return;
  }

  throw new ServerError({
    status: 404,
    message: `Character with slug "${slug}" not found`
  })

};
