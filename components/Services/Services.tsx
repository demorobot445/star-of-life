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

  useGSAP(
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

          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: "#service-grid",
              scrub: true,
              pin: true,
              pinSpacing: true,
              end: "+=6000",
            },
            defaults: {
              ease: Power4.easeInOut,
            },
          });

          data.map((e: any, i) => {
            tl.to(".service-content-grid", {
              x: isDesktop ? `-${50 * i}vw` : `-${100 * i}vw`,
            }) //
              .to(
                `.service-subheading-${i}`,
                { webkitTextFillColor: "black" },
                "<0.2"
              )
              .to(`.service-para-${i}`, { clipPath: "inset(0% 0% 0% 0%)" }, "<")
              .to(".service-image-grid", { y: `-${100 * i}vh` }, "<0.2");
          });
        }
      );
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
              <div key={i} className={s.imgCover}>
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
