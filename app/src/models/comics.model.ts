import { pg, Tables } from '../db';
import { ServerError } from '../util/serverError';

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
    const comics = await pg<ComicsModel>(Tables.comics)
      .where({id})
      .first();

    if (!comics) {
      throw new ServerError({
        status: 404,
        message: 'Comics not found'
      })
    }

    return comics;
  }

  static byCharacterId(characterId: number) {
    return pg<ComicsModel>(Tables.comics)
      .where({character_id: characterId});
  }
}
