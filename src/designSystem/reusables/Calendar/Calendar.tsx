import React from "react";
import {
  Calendar as AntdCalendar,
  CalendarProps,
  Col,
  Grid,
  Radio,
  Row,
  Select,
  Typography,
} from "antd";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/id";
import locale from "antd/es/date-picker/locale/id_ID";
import Styles from "./Calendar.module.scss";
import cn from "classnames";
import dayLocaleData from "dayjs/plugin/localeData";
dayjs.extend(dayLocaleData);

type YgbkCalendarProps = {
  holiday?: {
    date: Dayjs;
    title: string;
    id: string;
  }[];
} & CalendarProps<dayjs.Dayjs>;

const Calendar: React.FC<YgbkCalendarProps> = (props) => {
  const screens = Grid.useBreakpoint();

  const isHoliday = (current: Dayjs): boolean => {
    if (props.holiday) {
      return props.holiday?.some(
        (hd) => hd?.date?.format("DD-MM-YYYY") === current.format("DD-MM-YYYY")
      );
    }

    return false;
  };

  const renderDescription = (current: Dayjs): string | null => {
    if (!screens.md) {
      return null;
    }

    if (props.holiday) {
      return props.holiday
        ?.filter(
          (hd) =>
            hd?.date?.format("DD-MM-YYYY") === current.format("DD-MM-YYYY")
        )
        ?.map((hd) => hd.title)[0];
    }

    return null;
  };

  const dateFullCellRender = (date: Dayjs) => {
    return (
      <div
        className={cn(Styles["cell"], { [Styles["holiday"]]: isHoliday(date) })}
      >
        <Row
          justify={"end"}
          align={"stretch"}
          className={Styles["content"]}
          style={{ height: "100%" }}
        >
          <Col span={24}>{date.date()}</Col>
          <Col>
            <Typography.Text className={Styles["desc"]}>
              {renderDescription(date)}
            </Typography.Text>
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <AntdCalendar
      headerRender={({ value, onChange }) => {
        const start = 0;
        const end = 12;
        const monthOptions = [];

        let current = value.clone();
        const localeData = value.localeData();
        const months = [];
        for (let i = 0; i < 12; i++) {
          current = current.month(i);
          months.push(localeData.months(current));
        }

        for (let i = start; i < end; i++) {
          monthOptions.push(
            <Select.Option key={i} value={i} className="month-item">
              {months[i]}
            </Select.Option>
          );
        }

        const month = value.month();

        return (
          <div style={{ padding: 8 }}>
            <Row gutter={8} justify={"space-between"}>
              <Col>
                <Typography.Title level={4}>
                  Kalender Hari Libur
                </Typography.Title>
              </Col>
              <Col>
                <Select
                  dropdownMatchSelectWidth={false}
                  value={month}
                  onChange={(newMonth) => {
                    const now = value.clone().month(newMonth);
                    onChange(now);
                  }}
                >
                  {monthOptions}
                </Select>
              </Col>
            </Row>
          </div>
        );
      }}
      mode="month"
      dateFullCellRender={dateFullCellRender}
      locale={locale}
      {...props}
    />
  );
};

export default Calendar;
