import { pg, Tables } from '../db';

export interface CharacterModel {
  id: number;
  name: string;
  img: string;
  slug: string;
}

export class Character {
  static async bySlug(slug: string) {
    return pg<CharacterModel>(Tables.characters)
      .where({slug})
      .first();
  }

  static async all() {
    return pg<CharacterModel>(Tables.characters);
  }
}
