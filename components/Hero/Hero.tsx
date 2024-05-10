import { PathFive } from "../Svg/Svg";
import RedoAnimText from "./RedoAnimText";
import s from "./hero.module.scss";
// import Typewriter, { TypewriterClass } from "typewriter-effect";

const Hero = () => {
  return (
    <section id="hero" className={s.main}>
      <div className={s.pathFive}>
        <PathFive />
      </div>
      <h5 className={s.text}>
        <RedoAnimText
          delay={0}
          text="Philippe Layani is a Berlin- and Vienna-based digital UX designer who   blends creativity, technology, and strategy to develop exceptional,  tailor-made interactive experiences that connect brands with theiraudiences."
        />
      </h5>
      {/* <Typewriter
        component={"h3"}
        options={{
          strings:
            "Philippe Layani is a <span>Berlin</span> - and Vienna-based digital UX designer who blends creativity, technology, and strategy to develop exceptional, tailor-made interactive experiences that connect brands with their audiences.",
          autoStart: true,
          delay: 30,
        }}
      /> */}
    </section>
  );
};

export default Hero;
