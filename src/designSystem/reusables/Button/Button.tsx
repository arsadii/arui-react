import React from "react";
import { Button as AntdButton, ButtonProps } from "antd";

interface YgbkButtonProps extends ButtonProps {}

const Button: React.FC<YgbkButtonProps> = (props) => {
  return <AntdButton {...props}>{props.children}</AntdButton>;
};

export default Button;
