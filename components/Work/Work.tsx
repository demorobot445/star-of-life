import { useRef, useState } from "react";
import Elements from "./Elements";
import s from "./work.module.scss";
import { data } from "./data";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import { WorkPathFive } from "../Svg/Svg";

const Work = () => {
  const container = useRef<HTMLElement>(null);
  const [active, setActive] = useState<number>(0);
  const [heading, setHeading] = useState<string>(data[0].name);
  const [desc, setDesc] = useState<string>(data[0].desc);

  const { contextSafe } = useGSAP(() => {}, { scope: container });

  const handleClick = contextSafe((id: number) => {
    setActive(id);
    gsap
      .timeline({ defaults: { ease: Power4.easeInOut } })
      .to(".work-path-five", { fill: data[id].color })
      .to(".work-heading", { y: -20, opacity: 0 }, "<")
      .call(() => setHeading(data[id].name))
      .to(".work-heading", { y: 0, opacity: 1 })
      .to(".work-desc", { y: 20, opacity: 0 }, "<0.1")
      .call(() => setDesc(data[id].desc))
      .to(".work-desc", { y: 0, opacity: 1 });
  });

  return (
    <section id="work" ref={container} className={s.main}>
      <Elements />
      <h1 className="work-main-heading">Work</h1>
      <div className={`work-slider ${s.slider}`}>
        <div className={`work-path-5 ${s.pathFive}`}>
          <WorkPathFive />
        </div>
        <div className={s.slider_dots}>
          {data.map((e, i) => {
            return (
              <button
                data-active={i === active}
                onClick={() => handleClick(i)}
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
      </div>
    </section>
  );
};

export default Work;
