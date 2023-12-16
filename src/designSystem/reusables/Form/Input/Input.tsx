import { Input as AntdInput, InputProps } from "antd";
import React from "react";

interface YgbkInputProps extends InputProps {}

const Input: React.FC<YgbkInputProps> = (props) => {
  return <AntdInput size="large" {...props} />;
};

export default Input;
