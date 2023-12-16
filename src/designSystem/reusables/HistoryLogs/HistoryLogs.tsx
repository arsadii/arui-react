import React from "react";
import Styles from "./HistoryLogs.module.scss";
import { Image } from "antd";

export type LogDataType = {
  id?: string;
  title?: string;
  logtime?: string;
  actor?: string;
  content?: React.ReactNode;
  imageSrc?: string;
};

type HistoryLogsProps = {
  data?: LogDataType[];
};

const HistoryLogs: React.FC<HistoryLogsProps> = ({ data }) => {
  return (
    <div className={Styles["container"]}>
      {data?.map((act) => {
        return (
          <div key={act.id} className={Styles["card"]}>
            {act.imageSrc && (
              <Image
                src={act.imageSrc}
                style={{ height: "100%", width: "100px" }}
              />
            )}
            <div className={Styles["body"]}>
              <span className={Styles["ping-animation"]}></span>
              <p>
                <span className={Styles["actor"]}>{act.actor} </span>
                {act.title}
              </p>
              {act.content && (
                <div className={Styles["content"]}>{act.content}</div>
              )}
              <div className={Styles["footer"]}>
                {/* <span className={Styles["actor"]}>{act.actor}</span> */}
                <span className={Styles["datetime"]}>{act.logtime}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HistoryLogs;
