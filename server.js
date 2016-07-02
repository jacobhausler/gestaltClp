import express from 'express';
import gestaltServer from 'gestalt-server';
import gestaltPostgres from 'gestalt-postgres';
import importAll from 'import-all';

const app = express();

app.use(gestaltServer({
  schemaPath: `${__dirname}/schema.graphql`,
  objects: importAll(`${__dirname}/objects`),
  mutations: importAll(`${__dirname}/mutations`),
  database: gestaltPostgres({
    databaseURL: 'postgres://localhost/gestalt_clp',
  }),
  development: true,
  secret: '༼ つ ◕_◕ ༽つ',
}));

app.listen(8000);
