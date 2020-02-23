import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return Promise.all([
    knex.schema.createTable('orders', t => {
      t.increments();
      t.float('amount');
    }),

    knex.schema.createTable('comics_orders', t => {
      t.increments();
      t.integer('comics_id');
      t.integer('order_id');
      t.integer('quantity');
    })
  ]);
}

export async function down(knex: Knex): Promise<any> {
  return Promise.all([
    knex.schema.dropTable('orders'),
    knex.schema.dropTable('comics_orders'),
  ])
}
