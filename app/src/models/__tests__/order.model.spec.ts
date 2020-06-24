import { pg } from '../../db';
import { destroyTestDb, generateTestDb } from './db.utils';
import { Order } from '../order.model';
import { ServerError } from '../../util/serverError';

jest.mock('../../db');

describe('Order model',() => {
  beforeEach(() => {
    return generateTestDb(pg);
  });
  afterEach(() => {
    return destroyTestDb(pg);
  });

  it('should return order by id', async () => {
    const result = await Order.byId(1);

    expect(result).toEqual({
      id: 1,
      amount: 14.95
    })
  });

  it('should return error if not found', async () => {
    const orderNotFound = async () => {
      await Order.byId(999);
    };

    await expect(orderNotFound()).rejects.toThrowError(ServerError);
  })
});
