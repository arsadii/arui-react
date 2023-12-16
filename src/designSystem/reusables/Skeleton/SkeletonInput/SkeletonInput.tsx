import { Skeleton, SkeletonProps } from "antd";
import { SkeletonInputProps } from "antd/es/skeleton/Input";
import React from "react";
import Styles from "../Skeleton.module.scss";

type MySkeletonInputProps = {} & SkeletonInputProps & SkeletonProps;

const SkeletonInput: React.FC<MySkeletonInputProps> = (props) => {
  return (
    <div className={Styles["container"]}>
      <Skeleton.Input size="large" active block {...props} />
    </div>
  );
};

export default SkeletonInput;
