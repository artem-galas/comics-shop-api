import { Context } from 'koa';

import { Character } from '../models';
import { CharacterDto } from '../dto';

export const getCharacters = async (ctx: Context) => {
  const characters = await Character.all();
  ctx.body = characters.map((character) => new CharacterDto(character));
};
