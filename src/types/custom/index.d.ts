export interface ICustomRequest {
    [key: string]: any
  }
  declare global {
    namespace Express {
      interface Request {
        params?: ICustomQueryParamsBody,
        query?: ICustomQueryParamsBody
        body?: ICustomQueryParamsBody,
        [key: string]: any
      }
    }
  }
  
  export interface IPayload {
    aud: string
    jti: string
    iat: number
    nbf: number
    exp: number
    sub: string
    scopes: Array<string>
    // Other custom fields
  }
  