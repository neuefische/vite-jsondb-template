import jsonServer from 'json-server';
import fs from 'fs';
import path from 'path';

const filePath = path.join('db.json');
const data = fs.readFileSync(filePath, 'utf-8');
const db = JSON.parse(data);
const router = jsonServer.router(db);
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  })
);
server.use(router);
server.listen(process.env.SERVER_PORT || 5174, () => {
  console.log('JSON Server is running');
});

export default server;
