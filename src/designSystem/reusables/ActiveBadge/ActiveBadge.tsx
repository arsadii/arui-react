import { Badge, BadgeProps } from "antd";
import React from "react";

interface ActiveBadgeProps extends BadgeProps {
  children: React.ReactNode;
  isActive: boolean;
}

const ActiveBadge: React.FC<ActiveBadgeProps> = ({ children, isActive }) => {
  return (
    <Badge dot={isActive} offset={[-10, 10]}>
      {children}
    </Badge>
  );
};

export default ActiveBadge;
