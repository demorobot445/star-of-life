import { useRef, useState } from "react";
import Elements from "./Elements";
import s from "./work.module.scss";
import { data } from "./data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { WorkPathSix } from "../Svg/Svg";
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
          .to(`.slide-${i - 1}`, { yPercent: -100 })
          .from(`.slide-${i}`, { yPercent: i === 0 ? 0 : 100 }, "<")
          .from(`.heading-${i}`, { scale: innerWidth < 1600 ? 1.6 : 1.8 })
          .from(`.image-${i}`, {
            left: "120%",
            top: "50%",
            rotate: -35,
            duration: 3,
          })
          .call(() => setCounter(i + 1));
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

  const pointerEnter = contextSafe((e: React.MouseEvent) => {
    gsap.to(e.target, { scaleY: 1.4, duration: 0.4, ease: "power3" });
  });
  const pointerLeave = contextSafe((e: React.MouseEvent) => {
    gsap.to(e.target, { scaleY: 1, duration: 0.4, ease: "power3" });
  });

  return (
    <section id="work" ref={container} className={s.main}>
      <Elements />
      <h1 className="work-heading">
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          W
        </span>
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          o
        </span>
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          r
        </span>
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          k
        </span>
      </h1>

      <div className={`slider ${s.slider}`}>
        {/* <div className={`work-path-6 ${s.pathSix}`}>
          <WorkPathSix />
        </div> */}
        <div className={s.counter}>
          <h2>0{counter}/05</h2>
        </div>

        {data.map(({ name }, i) => {
          return (
            <div key={i} className={`slide-${i} ${s.slide}`}>
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
