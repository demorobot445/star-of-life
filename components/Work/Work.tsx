import { useRef, useState } from "react";
import Elements from "./Elements";
import s from "./work.module.scss";
import { data } from "./data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { WorkHeading } from "../Svg/Svg";
import Image from "next/image";

const Work = () => {
  const container = useRef<HTMLElement>(null);

  const [counter, setCounter] = useState<number>(1);

  const { contextSafe } = useGSAP(
    () => {
      // gsap.to(".work-path-6", {
      //   scrollTrigger: {
      //     trigger: container.current,
      //     start: "top bottom",
      //     scrub: true,
      //   },
      //   rotate: 360,
      // });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: `.slider`,
          start: "top+=100 top",
          end: "bottom+=3000 bottom",
          scrub: true,
          pin: true,
          pinSpacing: true,
          // markers: true,
        },
        defaults: { ease: "none" },
      });

      data.map((e, i) => {
        tl.call(() => setCounter(i + 1))
          .to(container.current!, { backgroundColor: e.color })
          .to(`.slide-${i - 1}`, { yPercent: -100 })
          .from(`.slide-${i}`, { yPercent: i === 0 ? 0 : 100 }, "<")
          .from(`.work-path-${i + 1}`, {
            scale: 0,
            duration: 0.8,
            ease: "power4",
          })
          .from(`.heading-${i}`, { scale: innerWidth < 1600 ? 1.6 : 1.8 })
          .from(`.image-${i}`, {
            left: "120%",
            top: "50%",
            rotate: -35,
            duration: 3,
          })
          .call(() => setCounter(i + 1))
          .to(`.work-path-${i + 1}`, {
            scale: 0,
            duration: 0.8,
            ease: "power4",
          });
      });

      // data.map((e, i) => {
      //   gsap
      //     .timeline({
      //       scrollTrigger: {
      //         trigger: `.slide-${i}`,
      //         start: "top 80%",
      //         toggleActions: "play none none reverse",
      //       },
      //     })
      //     .from(`.heading-${i}`, { scale: 2 });
      // });
    },
    { scope: container }
  );

  return (
    <section id="work" ref={container} className={s.main}>
      <div className={`work-heading ${s.heading}`}>
        <WorkHeading />
      </div>

      <div className={`slider ${s.slider}`}>
        {/* <div className={`work-path-6 ${s.pathSix}`}>
          <WorkPathSix />
        </div> */}
        <div className={s.counter}>
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
              <p className={s.tags}>website</p>
              <p data-right className={s.tags}>
                protfolio
              </p>
              <h2 className={`heading-${i}`}>{name}</h2>
              <h2 className={`heading-${i}`} data-stroke>
                {name}
              </h2>
              <div className={s.foot}>
                <p>
                  agency<span>spring / summer</span>
                </p>
                <p>
                  role<span>lead designer / developer</span>
                </p>
                <p>
                  client<span>unknown</span>
                </p>
                <p>
                  year<span>2023</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
