import * as Router from 'koa-router';

import { apiResponse } from '../middelwares';

import { getCharacters } from './get-characters';
import { getCharacterComics } from './get-character-comics';

export const router = new Router({
  prefix: '/api'
});

router.use(apiResponse);
router.get('/characters', getCharacters);
router.get('/characters/:slug', getCharacterComics);

export default router.routes();
