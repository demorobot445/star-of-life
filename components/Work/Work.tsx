import { useRef, useState } from "react";
import Elements from "./Elements";
import s from "./work.module.scss";
import { data } from "./data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { WorkHeading } from "../Svg/Svg";
import Image from "next/image";
import { useSnapshot } from "valtio";
import { store } from "@/store";

const Work = () => {
  const container = useRef<HTMLElement>(null);

  const [counter, setCounter] = useState<number>(1);

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
            .from(".work-heading path", {
              strokeDashoffset: 2340,
              duration: 0.8,
              ease: "none",
            })
            .to(".work-heading path", {
              duration: 0.8,
              fill: "black",
              ease: "power3",
            });

          gsap.to(".counter", {
            scrollTrigger: {
              trigger: ".counter",
              // markers: true,
              pin: true,
              start: "-10% top",
              end: "bottom bottom",
            },
          });

          data.map((e, i) => {
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: `.slide-${i}`,
                  start: "-35% bottom",
                  scrub: true,
                  pinSpacing: true,
                  // markers: true,
                },
                onStart: () => setCounter(i + 1),
                onReverseComplete: () => setCounter(i - 1),
                defaults: { ease: "none" },
              })
              .from(`.image-${i}`, {
                left: isDesktop ? "120%" : "80%",
                top: isDesktop ? "50%" : "100%",
                rotate: -35,
                duration: 5,
              })
              .from(`.heading-${i}`, { scale: 2 }, "<2")
              .from(
                `.work-path-${i + 1}`,
                {
                  scale: 0,
                  duration: 0.8,
                  ease: "power4",
                },
                "<0.6"
              );
          });
        }
      );
    },
    { scope: container }
  );

  const { workHeadingPointerEnter, workHeadingPointerLeave } =
    useSnapshot(store);

  return (
    <section id="work" ref={container} className={s.main}>
      <div className={`work-heading ${s.heading}`}>
        <WorkHeading />
      </div>

      <div className={`slider ${s.slider}`}>
        <div className={`counter ${s.counter}`}>
          <h2>0{counter}/08</h2>
        </div>

        {data.map(({ name }, i) => {
          return (
            <div key={i} className={`slide-${i} ${s.slide}`}>
              <Elements id={i} />
              <Image
                className={`image-${i} ${s.image}`}
                src={`/work/${i}.webp`}
                alt="image"
                height={2000}
                width={2000}
              />

              <div
                onPointerEnter={workHeadingPointerEnter}
                onPointerLeave={workHeadingPointerLeave}
              >
                <h2 className={`heading-${i}`}>{name}</h2>
                <h2 className={`heading-${i}`} data-stroke>
                  {name}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
