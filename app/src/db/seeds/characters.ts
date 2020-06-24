import Knex from 'knex'

exports.seed = (knex: Knex) => {
  // Deletes ALL existing entries
  return knex('comics').del()
    .then(() => {
      return knex('characters').del()
        .then(() => {
          // Inserts seed entries
          return knex('characters').insert([
            {
              id: 1,
              name: "Batman",
              img: "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376877/Batman_Chars_mzuuue.jpg",
              slug: "batman"
            },
            {
              id: 2,
              name: "Superman",
              img: "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376881/Sups_Chars_pwl398.jpg",
              slug: "superman"
            },
            {
              id: 3,
              name: "Wonder woman",
              img: "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376881/WWChar_lsjkun.jpg",
              slug: "wonder-woman"
            },
            {
              id: 4,
              name: "The Flash",
              img: "https://res.cloudinary.com/dkzhgauk1/image/upload/v1579376884/Flash_Cahrs_laz2kt.jpg",
              slug: "flash"
            }
          ]);
        });
    });
};
