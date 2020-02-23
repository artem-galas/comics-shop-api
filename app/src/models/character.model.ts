import { pg, Tables } from '../db';
import { ServerError } from '../util/serverError';

export interface CharacterModel {
  id: number;
  name: string;
  img: string;
  slug: string;
}

export class Character {
  static async bySlug(slug: string) {
    const character = await pg<CharacterModel>(Tables.characters)
      .where({slug})
      .first();

    if (character) {
      return character;
    }

    throw new ServerError({
      status: 404,
      message: `Character with slug "${slug}" not found`
    })
  }

  static async all() {
    return pg<CharacterModel>(Tables.characters);
  }
}
