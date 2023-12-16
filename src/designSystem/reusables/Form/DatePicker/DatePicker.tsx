import "dayjs/locale/zh-cn";
import { DatePickerProps, DatePicker as AntdDatePicker } from "antd";
import React from "react";
import { PickerComponentClass } from "antd/es/date-picker/generatePicker/interface";
import { RangePickerProps } from "antd/es/date-picker/generatePicker";
import dayjs from "dayjs";
import "dayjs/locale/id";
import locale from "antd/es/date-picker/locale/id_ID";

const { RangePicker } = AntdDatePicker;

type YgbkDatePickerProps = DatePickerProps;

const DatePicker: React.FC<YgbkDatePickerProps> & {
  RangePicker: PickerComponentClass<
    RangePickerProps<dayjs.Dayjs> & {
      dropdownClassName?: string;
      popupClassName?: string;
    },
    unknown
  >;
} = (props) => {
  return (
    <AntdDatePicker locale={locale} style={{ width: "100%" }} {...props} />
  );
};

DatePicker.RangePicker = RangePicker;

export default DatePicker;
