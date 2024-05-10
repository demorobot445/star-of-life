import { PathFive } from "../Svg/Svg";
import s from "./hero.module.scss";
import Typewriter, { TypewriterClass } from "typewriter-effect";

const Hero = () => {
  return (
    <section id="hero" className={s.main}>
      <div className={s.pathFive}>
        <PathFive />
      </div>
      <Typewriter
        component={"h3"}
        options={{
          strings:
            "Philippe Layani is a <span>Berlin</span> - and Vienna-based digital UX designer who blends creativity, technology, and strategy to develop exceptional, tailor-made interactive experiences that connect brands with their audiences.",
          autoStart: true,
          delay: 30,
        }}
      />
    </section>
  );
};

export default Hero;
