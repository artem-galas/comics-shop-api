import supertest, { SuperTest, Test } from 'supertest';

import app from '../../../app';
import { Character, Comics } from '../../models';
import { ComicsDto } from '../../dto';
import { ServerError } from '../../util/serverError';

const URL = '/api/characters/batman';
describe('GET /api/characters/:slug', () => {
  let request:  SuperTest<Test>;
  beforeAll(() => {
    request = supertest.agent(app)
  });

  afterEach(() => {
    app.close();
  });

  it('should return response data', async (done) => {
    const characterMockData = Promise.resolve({
        id: 1,
        name: "Batman",
        img: "batman-img.jpg",
        slug: "batman"
    });
    const comicsMockData = Promise.resolve([
      {
        "id": 1,
        "price": 2.99,
        "img": "batman_one.jpg",
        "title": "Chapter One",
        "description": "Description",
        "character_id": 1,
      },
    ]);
    jest.spyOn(Character, 'bySlug').mockReturnValueOnce(characterMockData);
    jest.spyOn(Comics, 'byCharacterId').mockReturnValueOnce(comicsMockData);

    const response = await request.get(URL);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toEqual<ComicsDto[]>([
      {
        "id": 1,
        "price": 2.99,
        "img": "batman_one.jpg",
        "title": "Chapter One",
        "description": "Description",
      }
    ]);
    done()
  });

  it('should return response error', async (done) => {
    jest.spyOn(Character, 'bySlug').mockImplementation(() => {
      throw Error('Unexpected error')
    });
    jest.spyOn(Comics, 'byCharacterId').mockReturnValueOnce(Promise.resolve([]));

    const response = await request.get(URL);

    const { body } = response;
    expect(response.status).toBe(500);
    expect(body.success).toEqual(false);
    expect(body.error).toEqual('Unexpected error');
    expect(body.data).toBeNull();
    done()
  });

  it('should return response ServerError', async (done) => {
    jest.spyOn(Character, 'bySlug').mockImplementation(() => {
      throw new ServerError({
        message: 'Character not found',
        status: 404,
      });
    });

    jest.spyOn(Comics, 'byCharacterId').mockReturnValueOnce(Promise.resolve([]));

    const response = await request.get(URL);

    const { body } = response;
    expect(response.status).toBe(404);
    expect(body.success).toEqual(false);
    expect(body.error).toEqual('Character not found');
    expect(body.data).toBeNull();
    done();
  });
});
