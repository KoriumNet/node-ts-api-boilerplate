import express, { Express } from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import { notFound, handler } from './middleware';
import { env } from './config/vars';
import routes from './routers';
import { environment } from './config/constants';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

(env === environment.PRODUCTION) ? app.use(helmet()) : app.use(morgan('short'));

//Routes
app.use('/v1', routes);

// Middlewares
app.use(notFound);
app.use(handler);

export { app };
