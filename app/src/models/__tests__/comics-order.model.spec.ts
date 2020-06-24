import { pg } from '../../db';
import { destroyTestDb, generateTestDb } from './db.utils';
import { ComicsOrder } from '../comics-order.model';

jest.mock('../../db');

describe('Order model', () => {
  beforeEach(async () => {
    await generateTestDb(pg);
  });
  afterEach(async () => {
    await destroyTestDb(pg);
  });

  it('.byOrderId', async () => {
    const result = await ComicsOrder.byOrderId(1);

    expect(result[0]).toEqual({
      id: 1,
      comics_id: 1,
      order_id: 1,
      quantity: 5,
    });
  });

  it('.withComics', async () => {
    const result = await ComicsOrder.withComics(1);

    expect(result[0]).toEqual({
      id: 1,
      title: '“I AM GOTHAM” Chapter One',
      price: 2.99,
      quantity: 5
    })
  });
});
