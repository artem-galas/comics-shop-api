import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('comics', t => {
    t.increments();
    t.float('price');
    t.string('img');
    t.string('title', 50);
    t.text('description');
    t.integer('character_id')
      .references('characters.id');
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('comics');
}
