import { IEnvironment, IScopes } from "../../types/constants";
import { IErrorMessages } from "../../types/error";

export const environment: IEnvironment = {
    DEVELOPMENT: 'development',
    PRODUCTION: 'production',
  };

  export const errorMessages: IErrorMessages = {
    UNAUTHORIZED: 'Unauthorized',
    FORBIDDEN: 'Forbidden',
    NOT_FOUND: 'Not Found',
    CONFLICT: 'Conflict',
    MALFORMED_ENTITY: 'Malformed entity',
    INTERNAL_SERVER_ERROR: 'Internal server error',
    NO_AUTHORIZATION: 'Authorization header missing'
  };

  export const jwtScopes: IScopes = {
    ME: 'modify:entity',
    CE: 'create:entity',
    DE: 'delete:entity',
    ALL: '*'
  };
  