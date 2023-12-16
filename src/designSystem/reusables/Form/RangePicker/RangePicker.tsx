import {
  Col,
  Form,
  FormItemProps,
  Row,
  TimePicker,
  TimePickerProps,
} from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";
import DatePicker from "../DatePicker";

type DateTimeType = {
  date: string;
  time: string;
};

type MyRangePickerProps = {
  customLabel?: string[];
  customName?: DateTimeType[];
  customPlaceholder?: DateTimeType[];
  colSpan?: number[];
  required?: boolean;
  validateStatus?: FormItemProps["validateStatus"][];
  help?: string[];
  readonly?: boolean;
};

const RangePicker: React.FC<MyRangePickerProps> = ({
  colSpan,
  customPlaceholder,
  ...props
}) => {
  const start = dayjs();
  const end = start.add(1, "d");
  const [startDate, setStartDate] = useState<Dayjs | null>(null);

  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    return current < dayjs().endOf("day").add(-1, "d");
  };
  const disabledEndDate: RangePickerProps["disabledDate"] = (current) => {
    return startDate ? current < startDate : false;
  };

  const disabledHours = (): number[] => {
    const currentHour = start.hour();
    let hours: number[] = [];
    for (let start = 0; start < currentHour; start++) {
      hours.push(start);
    }

    return hours;
  };
  const disabledMinutes = (selectedHour: any): number[] => {
    const currentMinute = start.minute();
    let minutes: number[] = [];
    if (dayjs().hour() === selectedHour) {
      for (let start = 0; start < currentMinute; start++) {
        minutes.push(start);
      }

      return minutes;
    }
    return [];
  };

  const disabledTime: TimePickerProps["disabledTime"] = (date) => ({
    disabledHours: disabledHours,
    disabledMinutes: disabledMinutes,
  });

  const renderCustomName = (index: number) => {
    return props.customName ? props.customName[index] : undefined;
  };
  const renderCustomLabel = (index: number) => {
    return props.customLabel ? props.customLabel[index] : undefined;
  };

  return (
    <Row>
      <Col span={colSpan ? colSpan[0] : 24}>
        <Form.Item
          validateStatus={
            props.validateStatus ? props.validateStatus[0] : undefined
          }
          help={props.help ? props.help[0] : undefined}
          label={props.customLabel ? props.customLabel[0] : undefined}
          required={props.required}
        >
          <Row gutter={4}>
            <Col span={14}>
              <Form.Item
                rules={[
                  {
                    required: props.required,
                    message: renderCustomLabel(0) + " wajib diisi!",
                  },
                ]}
                name={renderCustomName(0)?.date}
                noStyle
              >
                <DatePicker
                  inputReadOnly={props.readonly}
                  open={props.readonly ? !props.readonly : undefined}
                  allowClear={!props.readonly}
                  defaultValue={start}
                  style={{ width: "100%" }}
                  size="middle"
                  placeholder={
                    customPlaceholder ? customPlaceholder[0].date : undefined
                  }
                  disabledDate={disabledDate}
                  format={"DD-MM-YYYY"}
                  onChange={(value) => setStartDate(value)}
                />
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item
                rules={[
                  {
                    required: props.required,
                    message: "Waktu wajib diisi!",
                  },
                ]}
                name={props.customName ? props.customName[0].time : undefined}
                noStyle
              >
                <TimePicker
                  inputReadOnly={props.readonly}
                  open={props.readonly ? !props.readonly : undefined}
                  allowClear={!props.readonly}
                  defaultValue={start}
                  style={{ width: "100%" }}
                  size="middle"
                  placeholder={
                    customPlaceholder ? customPlaceholder[0].time : undefined
                  }
                  disabledTime={disabledTime}
                  format={"HH:mm"}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
      </Col>
      <Col span={colSpan ? colSpan[1] : 24}>
        <Form.Item
          validateStatus={
            props.validateStatus ? props.validateStatus[1] : undefined
          }
          help={props.help ? props.help[1] : undefined}
          required={props.required}
          label={props.customLabel ? props.customLabel[1] : undefined}
        >
          <Row gutter={4}>
            <Col span={14}>
              <Form.Item
                rules={[
                  {
                    required: props.required,
                    message: renderCustomLabel(1) + " wajib diisi!",
                  },
                ]}
                name={props.customName ? props.customName[1].date : undefined}
                noStyle
              >
                <DatePicker
                  inputReadOnly={props.readonly}
                  open={props.readonly ? !props.readonly : undefined}
                  allowClear={!props.readonly}
                  defaultValue={end}
                  style={{ width: "100%" }}
                  size="middle"
                  placeholder={
                    customPlaceholder ? customPlaceholder[1].date : undefined
                  }
                  disabledDate={disabledEndDate}
                  disabled={!startDate}
                  format={"DD-MM-YYYY"}
                />
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item
                rules={[
                  {
                    required: props.required,
                    message: "Waktu wajib diisi!",
                  },
                ]}
                name={props.customName ? props.customName[1].time : undefined}
                noStyle
              >
                <TimePicker
                  inputReadOnly={props.readonly}
                  open={props.readonly ? !props.readonly : undefined}
                  allowClear={!props.readonly}
                  defaultValue={end}
                  style={{ width: "100%" }}
                  size="middle"
                  placeholder={
                    customPlaceholder ? customPlaceholder[1].time : undefined
                  }
                  format={"HH:mm"}
                  disabledTime={disabledTime}
                  disabled={!startDate}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
      </Col>
    </Row>
  );
};

export default RangePicker;
