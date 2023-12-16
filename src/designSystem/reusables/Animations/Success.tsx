import { Player } from "@lottiefiles/react-lottie-player";
import Styles from "./Animation.module.scss";
import LottieSuccess from "src/assets/lottie/success.json";

const SuccessAnimation = () => {
  return (
    <div className={Styles["icon-container"]}>
      <Player
        autoplay
        keepLastFrame
        className={Styles["icons"]}
        src={LottieSuccess}
      />
    </div>
  );
};

export default SuccessAnimation;
