import { Player } from "@lottiefiles/react-lottie-player";
import s from "./hero.module.scss";
import { HeroArrowDown, PathFive } from "../Svg/Svg";
import DataM from "./lottie/data-m.json";
import DataT from "./lottie/data-t.json";
import Data from "./lottie/data.json";
import { useScrollTo } from "react-use-window-scroll";
import useWindowSize from "@/hooks/useWindowSize";
import Lottie from "react-lottie";

const Hero = () => {
  const scrollTo = useScrollTo();

  const size = useWindowSize();

  return (
    <section id="hero" className={s.main}>
      <div
        onClick={() => scrollTo({ top: innerHeight, behavior: "smooth" })}
        className={s.arrow}
      >
        <HeroArrowDown />
      </div>
      <div className={s.pathFive}>
        <PathFive />
      </div>
      <div className={s.lottie}>
        {size.width! > 640 ? (
          size.width! > 840 ? (
            <Player autoplay loop={false} src={Data} />
          ) : (
            <Player autoplay loop={false} src={DataT} />
          )
        ) : (
          <Player autoplay loop={false} src={DataM} />
        )}
      </div>
    </section>
  );
};

export default Hero;
