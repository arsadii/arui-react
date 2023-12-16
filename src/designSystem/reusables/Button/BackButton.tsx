import { ArrowLeftOutlined } from "@ant-design/icons";
import { ButtonProps } from "antd";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Styles from "src/designSystem/css/commonStyles.module.scss";

type BackButtonProps = {
  text?: string;
  backUrl?: string;
} & ButtonProps;

const BackButton: React.FC<BackButtonProps> = ({
  backUrl = "#",
  text = "Kembali",
  ...props
}) => {
  const go = useNavigate();

  return (
    <NavLink className={Styles["text-color-placeholder"]} to={backUrl}>
      <ArrowLeftOutlined /> {text}
    </NavLink>
  );
};

export default BackButton;
