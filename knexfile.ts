require('ts-node/register');
const path = require('path');
const BASE_PATH = path.join(__dirname, 'app', 'src', 'db');

const defaultSettings = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: path.join(BASE_PATH, 'migrations')
  },
  seeds: {
    directory: path.join(BASE_PATH, 'seeds')
  }
};

module.exports = {
  development: {
    ...defaultSettings
  },

  production: {
    ...defaultSettings
  }
};
