import YgbkApi from "src/api/YgbkApi";

export type PaginateParams = {
  perPage?: number;
  page?: number;
};

const useQueryAndMutation = (url: string, extendUrl?: string) => {
  const get = async (param?: string) => {
    const response = await YgbkApi.get(url + (extendUrl ?? "") + (param ?? ""));
    return response.data;
  };

  const post = async (data: any, extendUrl?: string) => {
    const response = await YgbkApi.post(url + (extendUrl ?? ""), data);
    return response.data;
  };

  return { get, post };
};

export default useQueryAndMutation;
