import '../../load.env';
import { environment } from '../constants';
import { IDbConfig } from '../../types/database';

export const env: string = process.env.NODE_ENV || environment.DEVELOPMENT;
export const OAuthApiKey: string | undefined = process.env.OAUTH_API_KEY;

// Public Key
export const publicKey: string = process.env.PUBLIC_KEY || '';

export const portNumber: number | string = process.env.PORT || 8080;

// Search values
export const defaultPageSize: number = parseInt(process.env.PAGE_SIZE || '20');
export const defaultLimitSuggestion: number = parseInt(process.env.LIMIT_SUGGESTION || '10');
export const defaultOffset: number = parseInt(process.env.OFFSET || '0');
export const maxPageSize: number  = parseInt(process.env.MAX_PAGE_SIZE || '100');

export const dbConfig: IDbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  };