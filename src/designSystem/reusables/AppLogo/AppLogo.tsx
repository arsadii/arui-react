import React from "react";
import Styles from "./AppLogo.module.scss";

type AppLogoProps = {
  colorMode: "green" | "white";
};

const AppLogo: React.FC<AppLogoProps> = ({ colorMode }) => {
  return <div className={Styles["container"]}>Logo App</div>;
};

export default AppLogo;
