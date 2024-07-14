import s from "./hero.module.scss";
import { PathFive } from "../Svg/Svg";
import ArrowDown from "./lottie/arrow-down.json";
import Data from "./lottie/data.json";
import { useLottie } from "lottie-react";
import { useScrollTo } from "react-use-window-scroll";

const TestHero = () => {
  const { View: ArrowView } = useLottie({
    animationData: ArrowDown,
    loop: true,
  });

  const { View } = useLottie({
    animationData: Data,
    loop: true,
  });

  const scrollTo = useScrollTo();

  return (
    <section id="hero" className={s.main}>
      <div
        onClick={() => scrollTo({ top: innerHeight, behavior: "smooth" })}
        className={s.arrow}
      >
        {ArrowView}
      </div>
      <div className={s.pathFive}>
        <PathFive />
      </div>
      <div className={s.heading}>{View}</div>
    </section>
  );
};

export default TestHero;
