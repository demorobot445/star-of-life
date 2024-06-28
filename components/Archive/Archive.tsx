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

          // Array.from(grid.current!.children).map((e: any, i) => {
          //   console.log(e);
          //   gsap.to(e, {
          //     yPercent: isDesktop
          //       ? Math.round(Math.random() * (-20 - 100) - 20)
          //       : Math.round(Math.random() * (-20 - 20) - 20),
          //     ease: "none",
          //     scrollTrigger: {
          //       trigger: e,
          //       scrub: true,
          //     },
          //   });
          // });

          gsap.to(".archive-card-0", {
            yPercent: isDesktop
              ? -80
              : Math.round(Math.random() * (-20 - 20) - 20),
            ease: "none",
            scrollTrigger: {
              trigger: ".archive-card-0",
              scrub: true,
            },
          });
          gsap.to(".archive-card-1", {
            yPercent: isDesktop
              ? -40
              : Math.round(Math.random() * (-20 - 20) - 20),
            ease: "none",
            scrollTrigger: {
              trigger: ".archive-card-1",
              scrub: true,
            },
          });
          gsap.to(".archive-card-2", {
            yPercent: isDesktop
              ? -80
              : Math.round(Math.random() * (-20 - 20) - 20),
            ease: "none",
            scrollTrigger: {
              trigger: ".archive-card-0",
              scrub: true,
            },
          });
          gsap.to(".archive-card-3", {
            yPercent: isDesktop
              ? -20
              : Math.round(Math.random() * (-20 - 20) - 20),
            ease: "none",
            scrollTrigger: {
              trigger: ".archive-card-3",
              scrub: true,
            },
          });
          gsap.to(".archive-card-4", {
            yPercent: isDesktop
              ? -60
              : Math.round(Math.random() * (-20 - 20) - 20),
            ease: "none",
            scrollTrigger: {
              trigger: ".archive-card-2",
              scrub: true,
            },
          });
          gsap.to(".archive-card-5", {
            yPercent: isDesktop
              ? -20
              : Math.round(Math.random() * (-20 - 20) - 20),
            ease: "none",
            scrollTrigger: {
              trigger: ".archive-card-5",
              scrub: true,
            },
          });
          gsap.to(".archive-card-6", {
            yPercent: isDesktop
              ? -60
              : Math.round(Math.random() * (-20 - 20) - 20),
            ease: "none",
            scrollTrigger: {
              trigger: ".archive-card-5",
              scrub: true,
            },
          });
          gsap.to(".archive-card-7", {
            yPercent: isDesktop
              ? -40
              : Math.round(Math.random() * (-20 - 20) - 20),
            ease: "none",
            scrollTrigger: {
              trigger: ".archive-card-5",
              scrub: true,
            },
          });
          gsap.to(".archive-card-8", {
            yPercent: isDesktop
              ? -20
              : Math.round(Math.random() * (-20 - 20) - 20),
            ease: "none",
            scrollTrigger: {
              trigger: ".archive-card-8",
              scrub: true,
            },
          });
          gsap.to(".archive-card-9", {
            yPercent: isDesktop
              ? -60
              : Math.round(Math.random() * (-20 - 20) - 20),
            ease: "none",
            scrollTrigger: {
              trigger: ".archive-card-7",
              scrub: true,
            },
          });
          gsap.to(".archive-card-10", {
            yPercent: isDesktop
              ? -60
              : Math.round(Math.random() * (-20 - 20) - 20),
            ease: "none",
            scrollTrigger: {
              trigger: ".archive-card-10",
              scrub: true,
            },
          });
          gsap.to(".archive-card-11", {
            yPercent: isDesktop
              ? -100
              : Math.round(Math.random() * (-20 - 20) - 20),
            ease: "none",
            scrollTrigger: {
              trigger: ".archive-card-9",
              scrub: true,
            },
          });
          gsap.to(".archive-card-12", {
            yPercent: isDesktop
              ? -40
              : Math.round(Math.random() * (-20 - 20) - 20),
            ease: "none",
            scrollTrigger: {
              trigger: ".archive-card-12",
              scrub: true,
            },
          });
          gsap.to(".archive-card-13", {
            yPercent: isDesktop
              ? -70
              : Math.round(Math.random() * (-20 - 20) - 20),
            ease: "none",
            scrollTrigger: {
              trigger: ".archive-card-11",
              scrub: true,
            },
          });
          gsap.to(".archive-card-15", {
            yPercent: isDesktop
              ? -70
              : Math.round(Math.random() * (-20 - 20) - 20),
            ease: "none",
            scrollTrigger: {
              trigger: ".archive-card-13",
              scrub: true,
            },
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
        {[...data].map((e, i) => {
          return <Card id={i} {...e} key={i} />;
        })}
      </div>
    </section>
  );
};

export default Archive;
