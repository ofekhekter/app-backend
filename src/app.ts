import express from 'express';
import cors from 'cors';
import usersController from './Controllers/usersController';
import projectsController from './Controllers/ProductController';
import { appConfig } from './Utils/appConfig';


const server = express();
server.use(cors());
server.use(express.json());

server.use('/api', usersController);
server.use('/api', projectsController);

server.listen(3001, () => console.log(`Listening on http://localhost:3001`));