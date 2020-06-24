import Koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors';

import routes from './src/routes';
import { errorHandler } from './src/middelwares';

const app = new Koa();

app.use(logger());
app.use(errorHandler);
app.use(cors());
app.use(bodyParser());
app.use(routes);

export default app.listen(process.env.PORT);
