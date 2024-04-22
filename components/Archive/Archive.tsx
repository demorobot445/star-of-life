import { useRef } from "react";
import Card from "./Card";
import Elements from "./Elements";
import s from "./archive.module.scss";
import { data } from "./data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Archive = () => {
  const container = useRef<HTMLElement>(null);
  const grid = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      Array.from(grid.current!.children).map((e: any, i) => {
        gsap.to(e, {
          yPercent: Math.round(Math.random() * (-20 - 100) - 20),
          ease: "none",
          scrollTrigger: {
            trigger: e,
            scrub: true,
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <section id="archive" ref={container} className={s.main}>
      <Elements />
      <h1 className="archive-heading">Archive</h1>
      <div ref={grid} className={s.grid}>
        {data.map((e, i) => {
          return <Card id={i} {...e} key={i} />;
        })}
      </div>
    </section>
  );
};

export default Archive;
