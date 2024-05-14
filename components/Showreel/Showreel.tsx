import { useRef } from "react";
import Elements from "./Elements";
import s from "./showreel.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ShowreelHeading } from "../Svg/Svg";

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

  return (
    <section ref={container} id="showreel" className={s.main}>
      <Elements />
      <div className={`showreel-heading ${s.heading}`}>
        <ShowreelHeading />
      </div>
      <div
        className={`showreel-video`}
        style={{ padding: "56.25% 0 0 0", position: "relative" }}
      >
        <iframe
          src="https://player.vimeo.com/video/933780210?h=0afc317c3c&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&controls=0"
          style={{
            position: "absolute",
            inset: 0,
            height: "100%",
            width: "100%",
            pointerEvents: "none",
          }}
          frameBorder={0}
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
      </div>
      {/* <video
        className={`showreel-video ${s.video}`}
        src="/demo-video.mp4"
        muted
        autoPlay
        playsInline
        loop
      /> */}
    </section>
  );
};

export default Showreel;
