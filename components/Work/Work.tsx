import { useRef, useState } from "react";
import Elements from "./Elements";
import s from "./work.module.scss";
import { data } from "./data";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import { WorkPathFive, WorkPathSix } from "../Svg/Svg";
import Image from "next/image";

const Work = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".work-path-6", {
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          scrub: true,
        },
        rotate: 360,
      });

      data.map((e, i) => {
        if (i < data.length - 1) {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: `.slide-${i}`,
                start: "top-=66 top",
                pin: true,
                pinSpacing: false,
                scrub: true,
              },
            })
            .to(`.slide-${i}`, {
              scale: 0.9,
            })
            .set(`.slide-${i}`, { opacity: 0 });
        }
      });
    },
    { scope: container }
  );

  return (
    <section id="work" ref={container} className={s.main}>
      <Elements />
      <h1 className="work-heading">
        <span>W</span>
        <span>o</span>
        <span>r</span>
        <span>k</span>
      </h1>
      <div className={`work-slider ${s.slider}`}>
        <div className={`work-path-6 ${s.pathSix}`}>
          <WorkPathSix />
        </div>
        {data.map(({ desc, name }, i) => {
          return (
            <div key={i} className={`slide-${i} ${s.slide}`}>
              <div className={s.content}>
                <h2>{name}</h2>
                <div className={s.tags}>
                  {desc.map((e, i) => {
                    return <p key={i}>{e}</p>;
                  })}
                </div>
              </div>
              <div className={s.image}>
                <div className={s.image_cover} />
                <Image fill src={`/work/${i}.webp`} alt="card-img" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
