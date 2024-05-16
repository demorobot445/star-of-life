import { PathFive } from "../Svg/Svg";
import s from "./hero.module.scss";
import { useLottie } from "lottie-react";
import { useRef } from "react";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Berlin from "./lottie/berlin.json";
import Vienna from "./lottie/vienna.json";
import Ux from "./lottie/ux.json";
import Tailor from "./lottie/tailor.json";
import Brand from "./lottie/brand.json";

const Hero = () => {
  const container = useRef<HTMLElement>(null);

  const {
    View: BerlinView,
    play: BerlinPlay,
    stop: BerlinStop,
  } = useLottie({
    animationData: Berlin,
    loop: false,
  });
  const {
    View: ViennaView,
    play: ViennaPlay,
    stop: ViennaStop,
  } = useLottie({
    animationData: Vienna,
    loop: false,
  });
  const {
    View: UxView,
    play: UxPlay,
    stop: UxStop,
  } = useLottie({
    animationData: Ux,
    loop: false,
  });
  const {
    View: TailorView,
    play: TailorPlay,
    stop: TailorStop,
  } = useLottie({
    animationData: Tailor,
    loop: false,
  });
  const {
    View: BrandView,
    play: BrandPlay,
    stop: BrandStop,
  } = useLottie({
    animationData: Brand,
    loop: false,
  });

  const typeOne = useRef<HTMLSpanElement>(null);
  const typeTwo = useRef<HTMLSpanElement>(null);
  const typeThree = useRef<HTMLSpanElement>(null);
  const typeFour = useRef<HTMLSpanElement>(null);
  const typeFour2 = useRef<HTMLSpanElement>(null);
  const typeFive = useRef<HTMLSpanElement>(null);
  const typeFive2 = useRef<HTMLSpanElement>(null);
  const typeSix = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      let textOne = SplitType.create(typeOne.current!, { split: "chars" });
      let textTwo = SplitType.create(typeTwo.current!, { split: "chars" });
      let textThree = SplitType.create(typeThree.current!, { split: "chars" });
      let textFour = SplitType.create(typeFour.current!, { split: "chars" });
      let textFour2 = SplitType.create(typeFour2.current!, { split: "chars" });
      let textFive = SplitType.create(typeFive.current!, { split: "chars" });
      let textFive2 = SplitType.create(typeFive2.current!, { split: "chars" });
      let textSix = SplitType.create(typeSix.current!, { split: "chars" });

      gsap.set(".coverOne", { display: "none" });
      gsap.set(".coverTwo", { display: "none" });
      gsap.set(".coverThree", { display: "none" });
      gsap.set(".coverFour", { display: "none" });
      gsap.set(".coverFive", { display: "none" });
      gsap.set(textOne.chars, { display: "none" });
      gsap.set(textTwo.chars, { display: "none" });
      gsap.set(textThree.chars, { display: "none" });
      gsap.set(textFour.chars, { display: "none" });
      gsap.set(textFour2.chars, { display: "none" });
      gsap.set(textFive.chars, { display: "none" });
      gsap.set(textFive2.chars, { display: "none" });
      gsap.set(textSix.chars, { display: "none" });

      gsap
        .timeline()
        .call(() => {
          BerlinStop();
          ViennaStop();
          UxStop();
          TailorStop();
          BrandStop();
        })
        .to(textOne.chars, {
          stagger: 0.08,
          display: "inline-block",
          ease: "none",
        })
        .call(() => BerlinPlay())
        .set(".coverOne", { display: "inline-flex" })
        .to(".lottieOne", { clipPath: "inset(0% 0% 100% 0%)" }, `>3`)
        .from(".lottieTextOne", { clipPath: "inset(100% 0% 0% 0%)" }, "<")
        .to(textTwo.chars, {
          stagger: 0.08,
          display: "inline-block",
          ease: "none",
        })
        .call(() => ViennaPlay())
        .set(".coverTwo", { display: "inline-flex" })
        .to(".lottieTwo", { clipPath: "inset(0% 0% 100% 0%)" }, `>3`)
        .from(".lottieTextTwo", { clipPath: "inset(100% 0% 0% 0%)" }, "<")
        .to(textThree.chars, {
          stagger: 0.08,
          display: "inline-block",
          ease: "none",
        })
        .call(() => UxPlay())
        .set(".coverThree", { display: "inline-flex" })
        .to(".lottieThree", { clipPath: "inset(0% 0% 100% 0%)" }, `>3`)
        .from(".lottieTextThree", { clipPath: "inset(100% 0% 0% 0%)" }, "<")
        .to(textFour.chars, {
          stagger: 0.08,
          display: "inline-block",
          ease: "none",
        })
        .to(textFour2.chars, {
          stagger: 0.08,
          display: "inline-block",
          ease: "none",
        })
        .call(() => TailorPlay())
        .set(".coverFour", { display: "inline-flex" })
        .to(".lottieFour", { clipPath: "inset(0% 0% 100% 0%)" }, `>3`)
        .from(".lottieTextFour", { clipPath: "inset(100% 0% 0% 0%)" }, "<")
        .to(textFive.chars, {
          stagger: 0.08,
          display: "inline-block",
          ease: "none",
        })
        .to(textFive2.chars, {
          stagger: 0.08,
          display: "inline-block",
          ease: "none",
        })
        .call(() => BrandPlay())
        .set(".coverFive", { display: "inline-flex" })
        .to(".lottieFive", { clipPath: "inset(0% 0% 100% 0%)" }, `>3`)
        .from(".lottieTextFive", { clipPath: "inset(100% 0% 0% 0%)" }, "<")
        .to(textSix.chars, {
          stagger: 0.08,
          display: "inline-block",
          ease: "none",
        });
    },
    { scope: container }
  );

  return (
    <section ref={container} id="hero" className={s.main}>
      <div className={s.pathFive}>
        <PathFive />
      </div>
      <div className={s.heading}>
        <h3>
          <span ref={typeOne}>Philippe Layani is a</span>
          <span className={`coverOne ${s.heading_cover}`}>
            <span className="lottieTextOne">Berlin</span>
            <span className={`lottieOne ${s.heading_svg}`}>{BerlinView}</span>
          </span>
          <span ref={typeTwo}>- and</span>
          <span className={`coverTwo ${s.heading_cover}`}>
            <span className="lottieTextTwo">Vienna</span>
            <span
              data-position="vienna"
              className={`lottieTwo ${s.heading_svg}`}
            >
              {ViennaView}
            </span>
          </span>
          <span ref={typeThree}>-based digital</span>
          <span className={`coverThree ${s.heading_cover}`}>
            <span className="lottieTextThree">UX</span>
            <span data-position="ux" className={`lottieThree ${s.heading_svg}`}>
              {UxView}
            </span>
          </span>
          <span ref={typeFour}>
            designer who blends , technology, and strategy{" "}
          </span>
          <span ref={typeFour2}> to develop exceptional</span>
          <span className={`coverFour ${s.heading_cover}`}>
            <span className="lottieTextFour">tailor</span>
            <span
              data-position="tailor"
              className={`lottieFour ${s.heading_svg}`}
            >
              {TailorView}
            </span>
          </span>
          <span ref={typeFive}>-made interactive</span>
          <span ref={typeFive2}> experiences that connect</span>
          <span className={`coverFive ${s.heading_cover}`}>
            <span className="lottieTextFive">Brands</span>
            <span
              data-position="brand"
              className={`lottieFive ${s.heading_svg}`}
            >
              {BrandView}
            </span>
          </span>
          <span ref={typeSix}> with their audiences.</span>
          <span className={`cursor ${s.heading_cursor}`}>|</span>
        </h3>
      </div>
    </section>
  );
};

export default Hero;
