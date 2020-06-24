import { pg } from '../../db';
import { Character, CharacterModel } from '../character.model';
import { ServerError } from '../../util/serverError';
import { generateTestDb, destroyTestDb } from './db.utils';

jest.mock('../../db');

describe('Character Model', () => {
  beforeAll(async () => {
    await generateTestDb(pg)
  });

  afterAll(async () => {
    await destroyTestDb(pg)
  });

  it('should return all characters', async () => {
    const result = await Character.all();

    expect(result).toHaveLength(2);
  });

  it('should return characters by slug', async () => {
    const result = await Character.bySlug('batman');

    expect(result).toEqual<CharacterModel>(
      {
        id: 1,
        name: "Batman",
        img: "batman.jpg",
        slug: "batman"
      }
    )
  });

  it('should throw NotFound', async () => {
    const characterNotFound = async () => {
      return await Character.bySlug('not_found');
    };

    await expect(characterNotFound()).rejects.toThrowError(ServerError);
  });
});
