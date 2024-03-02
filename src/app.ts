import express from 'express';
import usersController from './Controllers/usersController';
import projectsController from './Controllers/ProductController';

const server = express();
server.use(express.json());
const port = 3001;
const host = '0.0.0.0';

server.use('/api', usersController);
server.use('/api', projectsController);

server.listen(port, host, () => console.log(`Listening on http://${host}:${port}`));
