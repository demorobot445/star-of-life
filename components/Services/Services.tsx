import Image from "next/image";
import { data } from "./data";
import s from "./services.module.scss";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Elements from "./Elements";
import InsideElements from "./InsideElements";
import { ServiceMenu, ServicePathTwo, ServicesHeading } from "../Svg/Svg";

const Services = () => {
  const container = useRef<HTMLElement>(null);

  // useGSAP(
  //   () => {
  //     let mm = gsap.matchMedia(),
  //       breakPoint = 800;

  //     mm.add(
  //       {
  //         isDesktop: `(min-width: ${breakPoint}px)`,
  //         isMobile: `(max-width: ${breakPoint - 1}px)`,
  //       },
  //       (context) => {
  //         let { isDesktop, isMobile } = context.conditions as {
  //           isDesktop: boolean;
  //           isMobile: boolean;
  //         };

  //       }
  //     );
  //   },
  //   { scope: container }
  // );

  const { contextSafe } = useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.slider`,
            start: "top top",
            end: "bottom+=3000 bottom",
            scrub: true,
            pin: true,
            pinSpacing: true,
          },
          defaults: { ease: "none" },
        })
        .to(".menu svg", { rotate: 62 })
        .to(`.slide-0`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .from(".service-path-1 path", {
          stagger: 0.1,
          yPercent: -100,
          opacity: 0,
          scale: 0,
        })
        .from(".service-path-2", { xPercent: -100 }, "<0.2")
        .to(".menu svg", { rotate: 25 })
        .to(`.slide-1`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .from(".service-path-4 ", {
          yPercent: -100,
          scale: 0,
        })
        .from(".service-path-3", { yPercent: -100, rotate: 360 }, "<0.2")
        .to(".menu svg", { rotate: 342 })
        .to(`.slide-2`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .from(".service-path-5 ", {
          scale: 0,
          yPercent: -100,
        })
        .from(
          ".service-path-6",
          { yPercent: -100, rotate: 360, scale: 4 },
          "<0.2"
        )
        .to(".menu svg", { rotate: 292 })
        .to(`.slide-3`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .from(
          ".service-path-7",
          { scale: 4, rotate: 180, x: 400, y: 200 },
          "<0.2"
        )
        .to(".menu svg", { rotate: 243 })
        .to(`.slide-4`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .from(".service-path-9", { scale: 4, yPercent: -100 }, "<0.2")
        .to(".menu svg", { rotate: 206 })
        .to(`.slide-5`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .from(".service-path-11", { yPercent: -100 })
        .from(".service-path-10", { scale: 4, opacity: 0 }, "<0.2")
        .to(".menu svg", { rotate: 152 })
        .to(`.slide-6`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .from(".service-path-12 path", { opacity: 0, stagger: 0.05 })
        .from(".service-path-13", { yPercent: 100 }, "<0.2")
        .to(".menu svg", { rotate: 100 })
        .to(`.slide-7`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .from(".service-path-14", { xPercent: -100, yPercent: -100 }, "<0.2");

      // gsap
      //   .timeline({
      //     scrollTrigger: {
      //       trigger: container.current,
      //       scrub: true,
      //       end: "bottom top",
      //     },
      //     defaults: { ease: "none" },
      //   })
      //   .to(".service-path-2", { top: -500 })
      //   .to(".service-path-5", { top: -450 }, "<")
      //   .to(".service-path-4", { top: -1000 }, "<")
      //   .to(".service-path-3", { top: 200 }, "<");
      // let tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: "#service-grid",
      //     scrub: true,
      //     pin: true,
      //     pinSpacing: true,
      //     // markers: true,
      //     end: "+=6000",
      //   },
      //   defaults: {
      //     ease: "none",
      //   },
      // });
      // data.map((e: any, i) => {
      //   gsap.set(`.service-para-${i}`, { color: "rgba(0, 0, 0, 0)" });
      //   gsap.set(`.imgCover-${i}`, { scale: 0 });
      //   //
      //   tl.to(".service-content-grid", { x: `-${50 * i}vw` })
      //     .to(
      //       `.service-subheading-${i - 1}`,
      //       { webkitTextFillColor: "transparent" },
      //       "<"
      //     )
      //     .to(`.service-subheading-${i}`, { webkitTextFillColor: "black" }, "<")
      //     .to(`.service-para-${i}`, { color: "rgba(0, 0, 0, 1)" }, "<")
      //     .to(`.imgCover-${i}`, { scale: 1 }, "<")
      //     .to(".service-image-grid", { y: `-${100 * i}vh` }, "<")
      //     .to(`.imgCover-${i - 1}`, { scale: 0 }, "<")
      //     .to(`.service-para-${i - 1}`, { color: "rgba(0, 0, 0, 0)" }, "<");
      // });
    },
    { scope: container }
  );

  return (
    <section id="service" ref={container} className={s.main}>
      <div className={`services-heading ${s.heading}`}>
        <ServicesHeading />
      </div>
      <div className={`slider ${s.slider}`}>
        <div className={`menu ${s.menu}`}>
          <ServiceMenu />
        </div>

        {data.map(({ color, heading }, i) => {
          return (
            <div
              key={i}
              style={{ background: color, zIndex: i }}
              className={`slide-${i} ${s.slide}`}
            >
              <Elements id={i} />
              <h3>{heading}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
