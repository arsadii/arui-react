import React from "react";
import { Select as AntdSelect, SelectProps, Skeleton } from "antd";
import { SkeletonInputProps } from "antd/es/skeleton/Input";

type YgbkSelectProps = {
  readonly?: boolean;
} & SelectProps;

const Select: React.FC<YgbkSelectProps> = (props) => {
  const skeletonSize = (): SkeletonInputProps["size"] => {
    switch (props.size) {
      case "middle":
        return "default";
      case "small":
        return "small";
      default:
        return "large";
    }
  };

  if (props.loading) {
    return <Skeleton.Input active size={skeletonSize()} block />;
  }

  return (
    <AntdSelect
      open={props.readonly ? !props.readonly : undefined}
      showSearch={!props.readonly}
      size="large"
      placeholder={props.placeholder}
      options={props.options}
      filterOption={(input, option) =>
        ((option?.label as string) ?? "")
          .toLowerCase()
          .includes(input.toLowerCase())
      }
      {...props}
    />
  );
};

export default Select;
