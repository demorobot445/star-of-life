import Image from "next/image";
import s from "./about.module.scss";
import { useRef } from "react";
import SplitType from "split-type";
import Elements from "./Elements";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

const About = () => {
  const para = useRef<HTMLParagraphElement>(null);
  const paraHide = useRef<HTMLParagraphElement>(null);
  const paraTwo = useRef<HTMLParagraphElement>(null);
  const paraTwoHide = useRef<HTMLParagraphElement>(null);

  useIsomorphicLayoutEffect(() => {
    SplitType.create(para.current!, {
      types: "lines",
      lineClass: "about-para-lines",
    });
    SplitType.create(paraHide.current!, {
      types: "lines",
    });
    SplitType.create(paraTwo.current!, {
      types: "lines",
      lineClass: "about-para-lines",
    });
    SplitType.create(paraTwoHide.current!, {
      types: "lines",
    });
  }, []);

  return (
    <section id="about" className={s.main}>
      <Elements />
      <h1 className="about-heading">
        <span>A</span>
        <span>b</span>
        <span>o</span>
        <span>u</span>
        <span>t</span>
      </h1>
      <div id="about-grid" className={s.grid}>
        <Image
          className={`about-img ${s.image}`}
          src="/owner.png"
          height={1000}
          width={1000}
          alt="owner"
        />
        <div className={`about-para-box ${s.box}`}>
          <p ref={para} className={s.content}>
            Hello! I’m Philippe, a passionate digital designer with a focus on
            aesthetics and innovation. I’m also dedicated to using design and
            technology for positive social change. Outside of work, I enjoy
            spending time with my two kids, as well as indulging in design,
            interior decor, travel, culture, and art, all of which inspire my
            creative process.
          </p>
          <p ref={paraHide} data-hide className={s.content}>
            Hello! I’m Philippe, a passionate digital designer with a focus on
            aesthetics and innovation. I’m also dedicated to using design and
            technology for positive social change. Outside of work, I enjoy
            spending time with my two kids, as well as indulging in design,
            interior decor, travel, culture, and art, all of which inspire my
            creative process.
          </p>
          <div className={s.box}>
            <p ref={paraTwo} className={s.content}>
              Let’s connect and create innovative digital solutions and
              impactful brand experiences together.
            </p>
            <p ref={paraTwoHide} data-hide className={s.content}>
              Let’s connect and create innovative digital solutions and
              impactful brand experiences together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
