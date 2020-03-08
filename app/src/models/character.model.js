import { pg, Tables } from '../db';
import { ServerError } from '../util/serverError';

export class Character {
  static async bySlug(slug) {
    const character = await pg(Tables.characters)
      .where({slug})
      .first();

    return character;
  }

  static async all() {
    return pg(Tables.characters);
  }
}
