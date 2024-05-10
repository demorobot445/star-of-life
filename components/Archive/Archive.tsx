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

  const pointerEnter = contextSafe((e: React.MouseEvent) => {
    gsap.to(e.target, { scaleY: 1.4, duration: 0.4, ease: "power3" });
  });
  const pointerLeave = contextSafe((e: React.MouseEvent) => {
    gsap.to(e.target, { scaleY: 1, duration: 0.4, ease: "power3" });
  });

  return (
    <section id="archive" ref={container} className={s.main}>
      <Elements />
      <h1 className="archive-heading">
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          A
        </span>
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          r
        </span>
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          c
        </span>
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          h
        </span>
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          i
        </span>
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          v
        </span>
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          e
        </span>
      </h1>
      <div ref={grid} className={s.grid}>
        {data.map((e, i) => {
          return <Card id={i} {...e} key={i} />;
        })}
      </div>
    </section>
  );
};

export default Archive;
