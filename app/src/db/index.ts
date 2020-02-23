import * as Knex from 'knex';

const databaseUrl = process.env.DATABASE_URL;

export const pg = Knex({
  client: 'pg',
  connection: databaseUrl,
  searchPath: ['knex', 'public']
});

export const Tables = {
  characters: 'characters',
  comics: 'comics',
  orders: 'orders',
  comics_orders: 'comics_orders',
};
