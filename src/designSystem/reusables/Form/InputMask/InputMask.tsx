import React, { useEffect, useState } from "react";
import { useIMask } from "react-imask";
import Styles from "./InputMask.module.scss";
import cn from "classnames";

export type InputMaskProps = {
  mask?: string;
  onChangeInput?: (maskedValue: string, unMaskedValue: string) => void;
  inputSize?: "default" | "large";
  prefix?: string;
  suffix?: string;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  name?: string;
};

const InputMask: React.FC<InputMaskProps> = ({
  mask = "num",
  inputSize = "default",
  onChangeInput,
  prefix,
  suffix,
  placeholder,
  defaultValue,
  disabled,
  name,
}) => {
  const [imaskOpt] = useState({
    mask:
      `${prefix ? prefix + " " : ""}` + mask + `${suffix ? " " + suffix : ""}`,
    lazy: false,
    blocks: {
      num: {
        mask: Number,
        // scale: 2,
        thousandsSeparator: ".",
        // padFractionalZeros: true,
        radix: ",",
        // mapToRadix: ["."],
      },
    },
  });

  const {
    ref,
    unmaskedValue,
    value,
    setValue,
    setUnmaskedValue,
    setTypedValue,
  } = useIMask(imaskOpt);

  let defaultClassNames = Styles["input"];

  if (inputSize === "large") {
    defaultClassNames = cn(defaultClassNames, Styles["large"]);
  }

  useEffect(() => {
    onChangeInput && onChangeInput(value, unmaskedValue);
  }, [value]);

  useEffect(() => {
    defaultValue && setUnmaskedValue(defaultValue);
  }, [defaultValue]);

  return (
    <input
      name={name}
      disabled={disabled}
      type={"text"}
      placeholder={placeholder}
      className={defaultClassNames}
      ref={ref}
      id="myInputMask"
    />
  );
};

export default InputMask;
