import React from "react";
import Styles from "./SelectNative.module.scss";
import { SelectProps } from "antd";

export type NativeOptionType = {
  value: string;
  label: string;
};

interface SelectNativeProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  options?: SelectProps["options"];
}

const SelectNative: React.FC<SelectNativeProps> = (props) => {
  return (
    <select {...props} className={Styles["select"]}>
      {props.options?.map((opt) => {
        return (
          <option
            key={opt.value}
            className={Styles["option"]}
            value={opt.value as string}
          >
            {opt.label}
          </option>
        );
      })}
    </select>
  );
};

export default SelectNative;
