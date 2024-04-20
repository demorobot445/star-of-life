import { PathFive } from "../Svg/Svg";
import s from "./hero.module.scss";

const Hero = () => {
  return (
    <section id="hero" className={s.main}>
      <div className={s.pathFive}>
        <PathFive />
      </div>
      <h3>
        Philippe Layani is a - and -based digital <br />
        designer who blends , technology, and <br />
        strategy to develop exceptional, -made interactive <br />
        hat connect with their audiences.
      </h3>
    </section>
  );
};

export default Hero;
