import Knex from 'knex';
import { Tables } from '../../db';
import { Character } from '../character.model';
import { Comics } from '../comics.model';
import { ComicsOrder } from '../comics-order.model';
import { Order } from '../order.model';

export const generateTestDb = async (pg: Knex) => {
  await pg.migrate.latest();
  await generateCharacterTable(pg);
  await generateComicsTable(pg);
  await generateOrderTable(pg);
  await generateComicsOrderTable(pg);
};

export const destroyTestDb = async (pg: Knex) => {
  await pg.migrate.rollback(undefined, true);
};

const generateCharacterTable = async (pg: Knex) => {
  return pg<Character>(Tables.characters)
    .insert([
      {
        id: 1,
        name: "Batman",
        img: "batman.jpg",
        slug: "batman"
      },
      {
        id: 2,
        name: "Superman",
        img: "superman.jpg",
        slug: "superman"
      },
    ])
};

const generateComicsTable = async (pg: Knex) => {
  return pg<Comics>(Tables.comics)
    .insert([
      {
        "id": 1,
        "price": 2.99,
        "img": "comics01.jsp",
        "title": "“I AM GOTHAM” Chapter One",
        "description": "Comics 01 description",
        "character_id": 1,
      },
      {
        "id": 2,
        "price": 2.99,
        "title": "I AM GOTHAM” Chapter Two",
        "img": "comics02.jsp",
        "description": "Comics 01 description",
        "character_id": 1,
      },
      {
        "id": 11,
        'character_id': 2,
        "price": 1.99,
        "title": "PATH TO DOOM I",
        "img": "superman01.jpg",
        "description": "Superman description 01"
      },
      {
        "id": 12,
        'character_id': 2,
        "price": 4.99,
        "title": "PATH TO DOOM II",
        "img": "superman02.jpg",
        "description": "Superman description 02"
      },
    ])
};

const generateOrderTable = async (pg: Knex) => {
  return pg<Order>(Tables.orders)
    .insert([
      {
        id: 1,
        amount: 14.95
      },
      {
        id: 2,
        amount: 9.98
      }
    ])
};

const generateComicsOrderTable = async (pg: Knex) => {
  return pg<ComicsOrder>(Tables.comics_orders)
    .insert([
      {
        comics_id: 1,
        order_id: 1,
        quantity: 5,
      },
      {
        comics_id: 12,
        order_id: 2,
        quantity: 2,
      },
    ])
};
