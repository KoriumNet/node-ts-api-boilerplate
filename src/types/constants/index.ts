export interface IEnvironment {
    [key: string]: string
  }
  // Http Response Types
  export type TStatus = 'success' | 'error';
  export type TResponseData = object | null;
  export type TErrors = Error | null;
  export type TStackTrace = string | undefined;
  // Http Error Types
  export type TErrorCode = number;
  export type TErrorMessage = 'validation failed' | 'scope check failed' | 'no token specified' | 'no data to show'
      | 'something went wrong when saving in database' | 'connecting to oath api failed';
  
  // JWT Scopes
  export interface IScopes {
    ME: string
    CE: string
    DE: string
    ALL: string
  }
  