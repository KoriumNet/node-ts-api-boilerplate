import { config } from 'dotenv-safe';
import { join } from 'path';
import { environment } from './config/constants';

const env = process.env.NODE_ENV || environment.DEVELOPMENT;
if (env === environment.DEVELOPMENT) {
  config({
    path: join(__dirname, '../.env'),
    sample: join(__dirname, '../.env.example'),
  });
}
