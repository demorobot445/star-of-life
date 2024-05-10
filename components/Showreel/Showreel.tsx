import { useRef } from "react";
import Elements from "./Elements";
import s from "./showreel.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Showreel = () => {
  const container = useRef<HTMLElement>(null);

  const { contextSafe } = useGSAP(
    () => {
      gsap.from(".path-6 path", {
        scrollTrigger: {
          trigger: ".path-6",
          scrub: true,
          end: "bottom 20%",
        },
        strokeDashoffset: 2600,
        ease: "none",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            scrub: true,
            end: "bottom top",
          },
          defaults: { ease: "none" },
        })
        .to(".path-3", { bottom: "25%" })
        .to(".path-4", { bottom: "5%" }, "<")
        .to(".path-8", { bottom: "-20%" }, "<");
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
    <section ref={container} id="showreel" className={s.main}>
      <Elements />
      <h1 className="showreel-heading">
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          S
        </span>
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          h
        </span>
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          o
        </span>
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          w
        </span>
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          r
        </span>
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          e
        </span>
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          e
        </span>
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          l
        </span>
      </h1>
      <video
        className={`showreel-video ${s.video}`}
        src="/demo-video.mp4"
        muted
        autoPlay
        playsInline
        loop
      />
    </section>
  );
};

export default Showreel;
