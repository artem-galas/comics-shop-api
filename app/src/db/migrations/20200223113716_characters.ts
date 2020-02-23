import * as Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('characters', t => {
    t.increments();
    t.string('name', 100);
    t.string('img');
    t.string('slug', 50);
  })
}


export async function down(knex: Knex) {
  return knex.schema.dropTable('characters');
}

