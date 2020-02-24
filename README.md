# Comics Shop UI
Simple Koa application with Typescript + Docker

## Getting started

- install  dependencies
```bash
yarn
```

- run development server:
```bash
yarn dev
```

## Routes

All responses looks like:

```ts
{
    success: boolean;
    data: T | null;
    error?: string
}
```

For more info please have a look to [DTO's](https://github.com/artem-galas/comics-shop-api/tree/master/app/src/dto)

### GET /api/characters
```ts
Array<{
    id: number;
    name: string;
    img: string;
    slug: string;
}>

```

### GET /api/characters/:slug
```ts
type Slug = 'batman' | 'superman' | 'wonder-woman' | 'flash'

Array<{
    id: number;
    price: number;
    title: string;
    img: string;
    description: string;
    character_id: number;
}>
```

### GET /api/orders/:id

```ts
{
    id: number;
    amount: number;
    comics: Array<{
        id: number;
        title: string;
        price: number;
        quantity: number;
    }>
}
```

### POST /api/orders
Request:
```ts
{
    order: {
        comicsId: number;
        quantity: number;       
    }
}
```
Response:
```ts
{
    id: number;
    amount: number;
}
```

## Technologies

- [Koa.js](https://koajs.com/) - web framework
- [knex](http://knexjs.org/) - SQL query builder
- [pg](https://www.postgresql.org/) - Database
- [joi](https://github.com/hapijs/joi) - schema description
- [Docker](https://www.docker.com/) - Docker images
