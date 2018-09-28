const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres: // iyeagxwglokugf : 07c876e739873075fa5fd846bd514961837e7674d1a70228c206be2029ba496d @ ec2-54-221-212-15.compute-1.amazonaws.com : 5432 / d7q0ihfmclvfta';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { client.end(); });
