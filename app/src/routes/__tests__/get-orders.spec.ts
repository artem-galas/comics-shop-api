import supertest, { SuperTest, Test } from 'supertest';
import app from '../../../app';
import { ComicsOrder, Order } from '../../models';
import { OrderDto } from '../../dto';
import { ServerError } from '../../util/serverError';

const URL = '/api/orders/:id';
describe('GET api/orders/:id', () => {
  let request:  SuperTest<Test>;

  beforeAll(() => {
    request = supertest.agent(app)
  });

  afterEach(() => {
    app.close();
  });

  it('should return response data', async (done) => {
    jest.spyOn(Order, 'byId').mockResolvedValue({
      id: 1,
      amount: 14,
    });
    jest.spyOn(ComicsOrder, 'withComics').mockResolvedValue([
      {
        id: 1,
        price: 2.99,
        title: 'Batman',
        quantity: 4
      }
    ]);

    const response = await request.get(URL);

    const { body } = response;
    expect(response.status).toBe(200);
    expect(body.success).toBe(true);
    expect(body.data).toEqual<OrderDto>({
      id: 1,
      amount: 14,
      comics: [
        {
          id: 1,
          price: 2.99,
          title: 'Batman',
          quantity: 4
        }
      ]
    });
    done();
  });

  it('should return response error', async (done) => {
    jest.spyOn(Order, 'byId').mockImplementation(() => {
      throw Error('Unexpected error');
    });
    jest.spyOn(ComicsOrder, 'withComics').mockResolvedValue([]);

    const response = await request.get(URL);

    const { body } = response;
    expect(response.status).toBe(500);
    expect(body.error).toEqual('Unexpected error');
    expect(body.success).toBe(false);
    expect(body.data).toBeNull();
    done()
  });

  it('should return response ServerError', async (done) => {
    jest.spyOn(Order, 'byId').mockImplementation(() => {
      throw new ServerError({
        status: 404,
        message: 'Order not found',
      });
    });

    jest.spyOn(ComicsOrder, 'withComics').mockResolvedValue([]);

    const response = await request.get(URL);

    const { body } = response;
    expect(response.status).toBe(404);
    expect(body.success).toBe(false);
    expect(body.error).toEqual('Order not found');
    expect(body.data).toBeNull();
    done()
  });
});
