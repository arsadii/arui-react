import React from "react";
import LoadingSVG from "src/assets/svg/ball-loading-transparent.svg";
import Styles from "./Loading.module.scss";

const LoadingBall = () => {
  return (
    <div className={Styles["container"]}>
      <img src={LoadingSVG} alt="ball loading " className={Styles["img"]} />
    </div>
  );
};

export default LoadingBall;
