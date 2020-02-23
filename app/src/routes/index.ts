import * as Router from 'koa-router';

import { apiResponse } from '../middelwares';

import { getCharacters } from './get-characters';
import { getCharacterComics } from './get-character-comics';
import { postOrder } from './post-order';
import { getOrders } from './get-orders'

export const router = new Router({
  prefix: '/api'
});

router.use(apiResponse);
router.get('/characters', getCharacters);
router.get('/characters/:slug', getCharacterComics);
router.post('/order', postOrder);
router.get('/orders/:id', getOrders);

export default router.routes();
