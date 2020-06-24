import Knex from 'knex';
const knexfile = require('../../../../knexfile');

export const pg = Knex(knexfile.test);

export const Tables = {
  characters: 'characters',
  comics: 'comics',
  orders: 'orders',
  comics_orders: 'comics_orders',
};
