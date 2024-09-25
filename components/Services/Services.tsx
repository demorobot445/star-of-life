import { data } from "./data";
import s from "./services.module.scss";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ServiceMenu, ServicesHeading } from "../Svg/Svg";
import Shape from "../Work/Shape";

const Services = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add(
        { isDesktop: `(min-width: 800px)`, isMobile: `(max-width: 799px)` },
        (context) => {
          let { isDesktop } = context.conditions as { isDesktop: boolean };

          gsap
            .timeline({
              scrollTrigger: {
                trigger: container.current!,
                start: "top 40%",
                toggleActions: "play none none reverse",
                fastScrollEnd: isDesktop,
                preventOverlaps: isDesktop,
              },
              defaults: {
                ease: "power4.inOut",
              },
            })
            .from(".services-heading path", {
              strokeDashoffset: 1500,
              duration: 0.8,
              ease: "none",
            })
            .to(".services-heading path", {
              duration: 0.8,
              fill: "black",
              ease: "power3",
            });
        }
      );
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.slider`,
            start: "top top",
            end: "bottom+=3000 top",
            scrub: true,
            pin: true,
            pinSpacing: true,
          },
          defaults: { ease: "none" },
        })
        .to(".menu svg", { rotate: 62 })
        .to(`.slide-0`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .to(
          `.shapebox-shape-0`,
          {
            x: "100vw",
            yPercent: 100,
            stagger: 0.8,
            duration: 4,
          },
          "<"
        )
        .to(".menu svg", { rotate: 25 })
        .to(`.slide-1`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .to(
          `.shapebox-shape-1`,
          {
            x: "-100vw",
            yPercent: 70,
            stagger: 0.8,
            duration: 4,
          },
          "<"
        )
        .to(".menu svg", { rotate: 342 })
        .to(`.slide-2`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .to(
          `.shapebox-shape-2`,
          {
            x: "100vw",
            yPercent: -40,
            stagger: 0.8,
            duration: 4,
          },
          "<"
        )
        .to(".menu svg", { rotate: 292 })
        .to(`.slide-3`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .to(
          `.shapebox-shape-3`,
          {
            x: "-100vw",
            yPercent: 30,
            stagger: 0.8,
            duration: 4,
          },
          "<"
        )
        .to(".menu svg", { rotate: 243 })
        .to(`.slide-4`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .to(
          `.shapebox-shape-4`,
          {
            x: "100vw",
            yPercent: -20,
            stagger: 0.8,
            duration: 4,
          },
          "<"
        )
        .to(".menu svg", { rotate: 206 })
        .to(`.slide-5`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .to(
          `.shapebox-shape-5`,
          {
            x: "-100vw",
            yPercent: -100,
            stagger: 0.8,
            duration: 4,
          },
          "<"
        )
        .to(".menu svg", { rotate: 152 })
        .to(`.slide-6`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .to(
          `.shapebox-shape-6`,
          {
            x: "100vw",
            yPercent: 90,
            stagger: 0.8,
            duration: 4,
          },
          "<"
        )
        .to(".menu svg", { rotate: 100 })
        .to(`.slide-7`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .to(
          `.shapebox-shape-7`,
          {
            x: "-100vw",
            yPercent: 50,
            stagger: 0.8,
            duration: 4,
          },
          "<"
        );
    },
    { scope: container }
  );

  return (
    <section id="services" ref={container} className={s.main}>
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
              style={{ backgroundColor: "#ebebeb", zIndex: i }}
              className={`slide-${i} ${s.slide}`}
            >
              <Shape id={i} />
              <h3>{heading}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
