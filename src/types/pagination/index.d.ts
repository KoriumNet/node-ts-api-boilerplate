export interface IPagination {
  offset: number;
  pageSize: number;
}

export interface IObject {
  [key: string]: string | Array<{}>;
}
