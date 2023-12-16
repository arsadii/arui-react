import { Typography, TypographyProps } from "antd";
import React from "react";

type YgbkTitleProps = {
  children: React.ReactNode;
} & TypographyProps;

const Title: React.FC<YgbkTitleProps> = ({ children, ...props }) => {
  return <Typography.Title {...props}> {children}</Typography.Title>;
};

export default Title;
