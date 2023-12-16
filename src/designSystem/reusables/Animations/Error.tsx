import { Player } from "@lottiefiles/react-lottie-player";
import Styles from "./Animation.module.scss";
import LottieFailed from "src/assets/lottie/failed.json";

const ErrorAnimation = () => {
  return (
    <div className={Styles["icon-container"]}>
      <Player
        autoplay
        keepLastFrame
        className={Styles["icons"]}
        src={LottieFailed}
      />
    </div>
  );
};

export default ErrorAnimation;
