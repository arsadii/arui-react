import { Skeleton } from "antd";
import React from "react";

const SkeletonCard: React.FC = () => {
  return <Skeleton.Avatar active size={"large"} shape={"square"} />;
};

export default SkeletonCard;
