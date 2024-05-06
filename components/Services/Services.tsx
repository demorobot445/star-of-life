import Image from "next/image";
import { data } from "./data";
import s from "./services.module.scss";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import Elements from "./Elements";
import InsideElements from "./InsideElements";

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

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            scrub: true,
            end: "bottom top",
          },
          defaults: { ease: "none" },
        })
        .to(".service-path-2", { top: -500 })
        .to(".service-path-5", { top: -450 }, "<")
        .to(".service-path-4", { top: -1000 }, "<")
        .to(".service-path-3", { top: 200 }, "<");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#service-grid",
          scrub: true,
          pin: true,
          pinSpacing: true,
          // markers: true,
          end: "+=6000",
        },
        defaults: {
          ease: "none",
        },
      });

      data.map((e: any, i) => {
        gsap.set(`.service-para-${i}`, { color: "rgba(0, 0, 0, 0)" });
        gsap.set(`.imgCover-${i}`, { scale: 0 });
        //
        tl.to(".service-content-grid", { x: `-${50 * i}vw` })
          .to(
            `.service-subheading-${i - 1}`,
            { webkitTextFillColor: "transparent" },
            "<"
          )
          .to(`.service-subheading-${i}`, { webkitTextFillColor: "black" }, "<")
          .to(`.service-para-${i}`, { color: "rgba(0, 0, 0, 1)" }, "<")
          .to(`.imgCover-${i}`, { scale: 1 }, "<")
          .to(".service-image-grid", { y: `-${100 * i}vh` }, "<")
          .to(`.imgCover-${i - 1}`, { scale: 0 }, "<")
          .to(`.service-para-${i - 1}`, { color: "rgba(0, 0, 0, 0)" }, "<");
      });
    },
    { scope: container }
  );

  return (
    <section id="service" ref={container} className={s.main}>
      <Elements />
      <h1 className="service-heading">
        <span>S</span>
        <span>e</span>
        <span>r</span>
        <span>v</span>
        <span>i</span>
        <span>c</span>
        <span>e</span>
        <span>s</span>
      </h1>
      <div id="service-grid" className={s.grid}>
        <InsideElements />
        <div className={`service-image-grid ${s.imgGrid}`}>
          {data.map((e, i) => {
            return (
              <div key={i} className={`imgCover-${i} ${s.imgCover}`}>
                <Image
                  src={`/services/${i}.jpg`}
                  height={3000}
                  width={3000}
                  alt="image"
                  className={s.image}
                />
              </div>
            );
          })}
        </div>
        <div data-visible className={`service-content-grid ${s.grid}`}>
          {data.map(({ desc, heading }, i) => {
            return (
              <div key={i} className={s.textbox}>
                <h2 className={`service-subheading-${i}`}>{heading}</h2>
                <p className={`service-para-${i}`}>{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
