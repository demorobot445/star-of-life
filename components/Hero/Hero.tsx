import s from "./hero.module.scss";
import { HeroArrowDown } from "../Svg/Svg";
import DataT from "./lottie/data-t.json";
import Data from "./lottie/desktop.json";
import { useScrollTo } from "react-use-window-scroll";
import useWindowSize from "@/hooks/useWindowSize";
import Lottie from "react-lottie";
import Image from "next/image";

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

      <div className={s.lottie}>
        {size.width! > 640 ? (
          size.width! > 840 ? (
            <Lottie
              options={{
                loop: false,
                autoplay: true,
                animationData: Data,
              }}
            />
          ) : (
            <Lottie
              options={{
                loop: false,
                autoplay: true,
                animationData: DataT,
              }}
            />
          )
        ) : (
          <Image
            className={s.gif}
            src="/data.svg"
            alt="gif"
            priority
            unoptimized
            height={1000}
            width={1000}
          />
          // <Lottie
          //   options={{
          //     loop: false,
          //     autoplay: true,
          //     animationData: DataM,
          //   }}
          // />
        )}
      </div>
    </section>
  );
};

export default Hero;
