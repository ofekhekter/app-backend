import express from 'express';
import usersController from './Controllers/usersController';
import projectsController from './Controllers/ProductController';

const server = express();

server.use(express.json());

server.use('/api', usersController);
server.use('/api', projectsController);

server.listen(3000, () => console.log('Listening on http://localhost:3000'));