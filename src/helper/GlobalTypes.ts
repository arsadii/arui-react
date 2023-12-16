export type PaginateType = {
  currentPage: number;
  pageSize: number;
};

export type PaginateRequestBodyType = {
  per_page?: number;
  page?: number;
};

export type FilterRequestBodyType = {
  types: string[];
  values: string[][];
} & PaginateRequestBodyType;

export type SearchRequestBodyType = {
  keyword?: string;
} & PaginateRequestBodyType;
