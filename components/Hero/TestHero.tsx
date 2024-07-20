import s from "./hero.module.scss";
import { PathFive } from "../Svg/Svg";
import ArrowDown from "./lottie/arrow-down.json";
import DataM from "./lottie/data-m.json";
import DataT from "./lottie/data-t.json";
import Data from "./lottie/data.json";
import { useScrollTo } from "react-use-window-scroll";
import useWindowSize from "@/hooks/useWindowSize";
import Lottie from "react-lottie-player";

const TestHero = () => {
  const scrollTo = useScrollTo();

  const size = useWindowSize();

  return (
    <section id="hero" className={s.main}>
      <div
        onClick={() => scrollTo({ top: innerHeight, behavior: "smooth" })}
        className={s.arrow}
      >
        <Lottie loop animationData={ArrowDown} play />
      </div>
      <div className={s.pathFive}>
        <PathFive />
      </div>
      <div className={s.heading}>
        {size.width! > 640 ? (
          size.width! > 840 ? (
            <Lottie loop animationData={Data} play />
          ) : (
            <Lottie loop animationData={DataT} play />
          )
        ) : (
          <Lottie loop animationData={DataM} play />
        )}
      </div>
    </section>
  );
};

export default TestHero;
