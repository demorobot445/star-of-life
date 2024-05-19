import { useRef } from "react";
import Card from "./Card";
import Elements from "./Elements";
import s from "./archive.module.scss";
import { data } from "./data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArchiveHeading } from "../Svg/Svg";

const Archive = () => {
  const container = useRef<HTMLElement>(null);
  const grid = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(
    () => {
      let mm = gsap.matchMedia(),
        breakPoint = 800;

      mm.add(
        {
          isDesktop: `(min-width: ${breakPoint}px)`,
          isMobile: `(max-width: ${breakPoint - 1}px)`,
        },
        (context) => {
          let { isDesktop, isMobile } = context.conditions as {
            isDesktop: boolean;
            isMobile: boolean;
          };

          Array.from(grid.current!.children).map((e: any, i) => {
            gsap.to(e, {
              yPercent: isDesktop
                ? Math.round(Math.random() * (-20 - 100) - 20)
                : Math.round(Math.random() * (-20 - 20) - 20),
              ease: "none",
              scrollTrigger: {
                trigger: e,
                scrub: true,
              },
            });
          });
        }
      );
    },
    { scope: container }
  );

  return (
    <section id="archive" ref={container} className={s.main}>
      <Elements />
      <div className={`archive-heading ${s.heading}`}>
        <ArchiveHeading />
      </div>
      <div ref={grid} className={s.grid}>
        {[...data, ...data, ...data].map((e, i) => {
          return <Card id={i} {...e} key={i} />;
        })}
      </div>
    </section>
  );
};

export default Archive;
