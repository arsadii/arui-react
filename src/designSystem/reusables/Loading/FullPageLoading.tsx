import React from "react";
import Styles from "./FullPageLoading.module.scss";
import Loading from "./Loading";

type LoadingProps = {
  text?: string;
};

const FullPageLoading: React.FC<LoadingProps> = ({
  text = "Sedang memuat",
}) => {
  return (
    <div className={Styles["container"]}>
      <Loading />
      {/* {text} */}
    </div>
  );
};

export default FullPageLoading;
