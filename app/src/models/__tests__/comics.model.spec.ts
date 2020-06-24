import { pg } from '../../db';
import { Comics, ComicsModel } from '../comics.model';
import { destroyTestDb, generateTestDb } from './db.utils';
import { ServerError } from '../../util/serverError';

jest.mock('../../db');

describe('Comics model', () => {
  beforeAll(async () => {
    await generateTestDb(pg)
  });

  afterAll(async () => {
    await destroyTestDb(pg)
  });

  it('should return comics by ID', async () => {
    const result = await Comics.byId(1);

    expect(result).toEqual<ComicsModel>({
      id: 1,
      price: 2.99,
      img: "comics01.jsp",
      title: "“I AM GOTHAM” Chapter One",
      description: "Comics 01 description",
      character_id: 1,
    })
  });

  it('should throw an error if comics not found', async () => {
    const comicsNotFound = async () => {
      return await Comics.byId(999);
    };

    await expect(comicsNotFound()).rejects.toThrowError(ServerError)
  });

  it('should return comics by character id', async () => {
    const result = await Comics.byCharacterId(1);

    expect(result).toHaveLength(2);
    expect(result[0].character_id).toEqual(1);
  });

  it('should return empty array if not found by character id', async () => {
    const result = await Comics.byCharacterId(99);

    expect(result).toEqual([]);
  })
});
