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
  const [active, setActive] = useState<number>(0);
  const [number, setNumber] = useState<number>(0);
  const [heading, setHeading] = useState<string>(data[0].name);
  const [desc, setDesc] = useState<string>(data[0].desc);

  useGSAP(
    () => {
      gsap.set(".work-heading", { y: -20, opacity: 0 });
      gsap.set(".work-desc", { y: 20, opacity: 0 });
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-slider",
          // markers: true,
          pin: true,
          pinSpacing: true,
          end: "+=4000",
          scrub: true,
        },
        defaults: {
          ease: Power4.easeInOut,
        },
      });
      data.map((e, i) => {
        tl.from(`.work-content-img-${i}`, {
          clipPath: "inset(100% 0% 0% 0%)",
          duration: 2,
        })
          .to(".work-path-five", { fill: data[i].color }, "<0.2")
          .to(".work-heading", { y: -20, opacity: 0 }, "<")
          .to(".counter", { y: -20, opacity: 0 }, "<0.2")
          .call(() => {
            setHeading(data[i].name);
            setActive(i);
            setNumber(i + 1);
          })
          .to(".counter", { y: 0, opacity: 1 }, "<0.2")
          .to(".work-heading", { y: 0, opacity: 1 })
          .to(".work-desc", { y: 20, opacity: 0 }, "<0.1")
          .call(() => setDesc(data[i].desc))
          .to(".work-desc", { y: 0, opacity: 1 });
      });
    },
    { scope: container }
  );

  return (
    <section id="work" ref={container} className={s.main}>
      <Elements />
      <h1 className="work-main-heading">Work</h1>
      <div className={`work-slider ${s.slider}`}>
        <div className={`work-path-6 ${s.pathSix}`}>
          <WorkPathSix />
        </div>
        <h2 className={s.counter}>
          <span className="counter">0{number}</span>/
          {data.length < 10 ? "0" + data.length : data.length}
        </h2>
        <div className={`work-path-5 ${s.pathFive}`}>
          <WorkPathFive />
        </div>
        <h2 className={s.tag}>01 Work</h2>
        <div className={s.slider_dots}>
          {data.map((e, i) => {
            return (
              <button
                data-active={i === active}
                key={i}
                className={`work-dot ${s.slider_dots_dot}`}
              />
            );
          })}
        </div>
        <div className={s.content}>
          <h2 className="work-heading">{heading}</h2>
          <p className="work-desc">{desc}</p>
        </div>
        {data.map((e, i) => {
          return (
            <Image
              key={i}
              src={`/work/${i}.jpg`}
              height={3000}
              width={3000}
              className={`work-content-img-${i} ${s.img}`}
              alt="image"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Work;
