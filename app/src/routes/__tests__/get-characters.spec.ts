import supertest, { SuperTest, Test } from 'supertest';

import app from '../../../app';
import { Character } from '../../models';
import { CharacterDto } from '../../dto';

const URL = '/api/characters';
describe('GET api/characters', () => {
  let request:  SuperTest<Test>;

  beforeAll(() => {
    request = supertest.agent(app)
  });

  afterEach(() => {
    app.close();
  });

  it('should return data response', async (done) => {
    const mockData = Promise.resolve(
      [
        {
          id: 1,
          name: "Batman",
          img: "batman-img.jpg",
          slug: "batman"
        },
      ]
    );

    jest.spyOn(Character, 'all').mockReturnValueOnce(mockData);

    const response = await request.get(URL);

    expect(response.status).toBe(200);
    expect(response.body.success).toEqual(true);
    expect(response.body.data).toEqual<CharacterDto[]>([
      {
        id: 1,
        img: 'batman-img.jpg',
        name: 'Batman',
        slug: 'batman'
      }
    ]);
    done()
  });

  it('should return error response', async (done) => {
    jest.spyOn(Character, 'all').mockImplementation(() => {
      throw new Error('Unexpected Error');
    });

    const response = await request.get(URL);

    expect(response.status).toBe(500);
    expect(response.body.error).toEqual('Unexpected Error');
    expect(response.body.data).toBeNull();
    done()
  });
});
