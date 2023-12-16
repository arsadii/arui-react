import { PaginateParams } from "src/hooks/useQueryAndMutation";

export type UrlParamType = {
  key: string;
  value?: string;
};

export type QueryParamsType = {
  paginate?: PaginateParams;
  params?: UrlParamType[];
  trashed?: boolean;
  keyword?: string;
};

export type SearchParams = {
  keyword: string;
};

export const setPaginate = (params: PaginateParams) => {
  return [
    {
      key: "limit",
      value: String(params.perPage),
    },
    {
      key: "page",
      value: String(params.page),
    },
  ];
};

export const formatParams = (params: UrlParamType[]) => {
  const joinedParams = params
    .filter((param) => param.value)
    .map((param) => {
      return `${param.key}=${param.value}`;
    })
    .join("&");

  return "?" + joinedParams;
};

export const handleQueryParams = (params?: QueryParamsType) => {
  if (params?.trashed) {
    return (
      "/trash" +
      formatParams([
        ...setPaginate({
          page: params?.paginate?.page,
          perPage: params?.paginate?.perPage,
        }),
      ])
    );
  }

  if (params) {
    return formatParams([
      ...setPaginate({
        page: params?.paginate?.page,
        perPage: params.paginate?.perPage,
      }),
      ...(params.params ?? []),
    ]);
  }

  return "";
};

export const dashboardMenuPrefix = import.meta.env.VITE_DASHBOARD_MENU_PREFIX;
