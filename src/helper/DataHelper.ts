import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/id";
dayjs.extend(customParseFormat);

export const GetFirstItemNumber = (currentPage: number, perPage: number) => {
  return currentPage * perPage - (perPage - 1);
};

export const FormatDateRange = (format: string, date?: any[]) => {
  return date?.map((d) => {
    return dayjs(d).format(format);
  });
};

export const FormatDate = (format: string, date?: any) => {
  return dayjs(date).format(format);
};

export const FormatDateFromDB = (
  date: string,
  format: string = "DD MMMM YYYY",
  createFromFormat: string = "YYYY-MM-DD HH:mm:ss"
): string => {
  return dayjs(date, createFromFormat).locale("id").format(format);
};

export const FormatTableData = (responseData: any) => {
  return responseData?.data?.map((data: any, key: number) => {
    return {
      no:
        (responseData?.meta?.current_page
          ? GetFirstItemNumber(
              responseData?.meta?.current_page,
              responseData?.meta?.per_page
            )
          : 1) +
        key +
        ".",
      key: data?.id,
      ...data,
    };
  });
};

/**
 * Get formatted interval from minutes
 * @param totalMinutes number
 * @returns formatted string "Jam Menit"
 */

export const GetIntervalByMinutes = (totalMinutes: number): string => {
  if (totalMinutes < 1 || isNaN(totalMinutes)) return "-";

  const hour = Math.trunc(totalMinutes / 60);
  const minutes = totalMinutes - hour * 60;

  return `${hour} Jam ${minutes} Menit`;
};

/**
 * Format number with dot thousands separator
 * @param total
 * @returns
 */

export const FormatThousands = (total: number): string => {
  if (isNaN(total)) {
    return "0";
  }
  return total.toLocaleString("id-ID");
};

/**
 * Format number to Rp
 * @param amount
 * @returns
 */

export const FormatMoney = (amount: number): string => {
  return `Rp${FormatThousands(amount)}`;
};

/**
 * Check Valid UUID
 * @param uuid
 * @returns boolean
 */
export const isValidUUID = (uuid: string): boolean => {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    uuid
  );
};

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function generateString(length: number) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
