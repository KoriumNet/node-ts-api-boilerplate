import { Express } from 'express';
import { Server } from 'http';
import http from 'http';
import { env, portNumber } from './config/vars';
import { app } from './server';
import { environment } from './config/constants';

// Do not use HTTPS in production (for Google App Engine).
const port = Number(portNumber);
const server: Server | Express = (env === environment.PRODUCTION) ? http.createServer(app) : app;

// eslint-disable-next-line no-console
server.listen(port, () => console.log(`Server started on port ${port} . . .`));
