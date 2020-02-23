import { pg, Tables } from '../db';

export interface ComicsModel {
  id: number;
  price: number;
  title: string;
  img: string;
  description: string;
  character_id: number;
}

export class Comics {
  static async byId(id: number) {
    return pg<ComicsModel>(Tables.comics)
      .where({id})
      .first();
  }

  static byCharacterId(characterId: number) {
    return pg<ComicsModel>(Tables.comics)
      .where({character_id: characterId});
  }
}
