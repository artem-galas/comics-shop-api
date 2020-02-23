import * as Koa from 'koa';
import * as logger from 'koa-logger';
import * as bodyParser from 'koa-bodyparser'
import * as cors from '@koa/cors';

import routes from './src/routes';
import { errorHandler } from './src/middelwares';

const app = new Koa();

app.use(logger());
app.use(errorHandler);
app.use(cors());
app.use(bodyParser());
app.use(routes);

app.listen(process.env.PORT);
