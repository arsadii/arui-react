import React from "react";
import { Card as AntdCard, CardProps } from "antd";
import Styles from "./Card.module.scss";

interface YgbkCardProps extends CardProps {}

const Card: React.FC<YgbkCardProps> = (props) => {
  return (
    <AntdCard className={Styles["container"]} {...props}>
      {props.children}
    </AntdCard>
  );
};

export default Card;
