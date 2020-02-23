import * as Koa from 'koa';
import * as logger from 'koa-logger';
import * as bodyParser from 'koa-bodyparser'
import * as cors from '@koa/cors';

const app = new Koa();

app.use(logger());
app.use(cors());
app.use(bodyParser());

app.listen(process.env.PORT);
