import { AxiosError } from "axios";
import { FilterRequestBodyType } from "./GlobalTypes";
import { FormItemProps } from "antd";

export const handleFormHelp = (message: string[]) => {
  return (
    <>
      {message?.map((m) => {
        return <p>{m}</p>;
      })}
    </>
  );
};

export type FormFilterRequestDataType = {
  field: string;
  value: string[];
  range: boolean;
  grand?: boolean;
  relation?: boolean;
};

export const formatFilterRequests = (
  filterData?: FormFilterRequestDataType[]
): FilterRequestBodyType => {
  let types: string[] = [];
  let values: string[][] = [];

  filterData?.forEach((d) => {
    let type = d.range
      ? "range"
      : d.grand
      ? "grand_field"
      : d.relation
      ? "relation"
      : "by_field";

    types.push(type + ":" + d.field);
    values.push(d.value);
  });

  return {
    types: types,
    values: values,
  };
};

export type YgbkResponse = {
  message?: string;
  field?: {
    [index: string]: string[];
  };
};

export const HandleErrorResponse = (
  error: AxiosError<YgbkResponse>
): YgbkResponse | undefined => {
  return error?.response?.data;
};

export const HandleFieldError = (field: YgbkResponse["field"]): Array<any> => {
  if (field) {
    return Object.entries(field).map((field) => {
      const [key, value] = field;
      return {
        [key]: value,
      };
    });
  }
  return [];
};

export const FieldErrorCheck = (
  error: AxiosError<YgbkResponse>,
  fieldName?: string
) => {
  const errorData = HandleErrorResponse(error);

  const fieldFind = HandleFieldError(errorData?.field).find((field) => {
    return Object.keys(field)[0] === fieldName;
  });

  if (fieldFind) {
    return fieldFind[fieldName ?? 0][0];
  }

  return false;
};

export function GetErrorMessage(
  requestError: AxiosError<YgbkResponse>
): string {
  return HandleErrorResponse(requestError)?.message ?? "";
}

export type FieldErrorType = {
  [key: string]: string;
};

export function GetFieldError(
  requestError: AxiosError<YgbkResponse>
): FieldErrorType {
  const errorData = HandleErrorResponse(requestError);

  let fieldObject: FieldErrorType = {};

  Object.entries(errorData?.field ?? {}).forEach((field) => {
    const [key, value] = field;
    Object.assign(fieldObject, {
      [key]: value?.join(),
    });
  });

  return fieldObject;
}

export function GetFieldValidateStatus(
  fieldError: string | undefined
): FormItemProps["validateStatus"] {
  if (Boolean(fieldError)) {
    return "error";
  }

  return undefined;
}
