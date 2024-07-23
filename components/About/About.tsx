import Image from "next/image";
import s from "./about.module.scss";
import { useRef } from "react";
import SplitType from "split-type";
import Elements from "./Elements";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AboutHeading } from "../Svg/Svg";

const About = () => {
  const container = useRef<HTMLDivElement>(null);
  const para = useRef<HTMLParagraphElement>(null);
  const paraHide = useRef<HTMLParagraphElement>(null);

  useIsomorphicLayoutEffect(() => {
    SplitType.create(para.current!, {
      types: "words",
      wordClass: "about-para-word",
    });
    SplitType.create(paraHide.current!, {
      types: "words",
    });
  }, [para, paraHide]);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add({ isDesktop: `(min-width: 800px)` }, (context) => {
        let { isDesktop } = context.conditions as { isDesktop: boolean };
        gsap
          .timeline({
            scrollTrigger: {
              trigger: container.current!,
              start: "top 40%",
              toggleActions: "play none none reverse",
              fastScrollEnd: true,
              preventOverlaps: true,
            },
            defaults: {
              ease: "power4.inOut",
            },
          })
          .from(".about-heading path", {
            strokeDashoffset: 1120,
            duration: 0.8,
            ease: "none",
          })
          .to(".about-heading path", {
            duration: 0.8,
            fill: "black",
            ease: "power3",
          })
          .from(".about-path-2", { xPercent: 70 }, "<");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: isDesktop ? "#about-grid" : ".about-para-box",
              start: "top center",
              end: "bottom center",
              toggleActions: "play none none reverse",
              fastScrollEnd: true,
              preventOverlaps: true,
              scrub: true,
            },
            defaults: {
              ease: "power4.inOut",
            },
          })
          .to(
            ".about-para-word",
            {
              clipPath: "inset(0% 0% 0% 0%)",
              stagger: 0.2,
            },
            "<"
          );
        gsap
          .timeline({
            scrollTrigger: {
              trigger: "#about-grid",
              start: "top center",
              end: "bottom center",
              toggleActions: "play none none reverse",
              fastScrollEnd: true,
              preventOverlaps: true,
            },
            defaults: {
              ease: "power4.inOut",
            },
          })
          .from(".about-img", { clipPath: "inset(100% 0% 0% 0%)" })
          .from(".about-path-1", { xPercent: -50, y: -400, scale: 0 })
          .to(
            ".about-path-3 path",
            { strokeDashoffset: 0, duration: 2 },
            "<0.2"
          )
          .from(".about-path-4", { yPercent: 100, scale: 0 }, "<0.2");
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} id="about" className={s.main}>
      <Elements />
      <div className={`about-heading ${s.heading}`}>
        <AboutHeading />
      </div>
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
            Hello! I&apso;m Philippe, a passionate digital designer with a focus
            on aesthetics and innovation. I&apso;m also dedicated to using
            design and technology for positive social change. Outside of work, I
            enjoy spending time with my two kids, as well as indulging in
            design, interior decor, travel, culture, and art, all of which
            inspire my creative process.
          </p>
          <p ref={paraHide} data-hide className={s.content}>
            Hello! I&apso;m Philippe, a passionate digital designer with a focus
            on aesthetics and innovation. I&apso;m also dedicated to using
            design and technology for positive social change. Outside of work, I
            enjoy spending time with my two kids, as well as indulging in
            design, interior decor, travel, culture, and art, all of which
            inspire my creative process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
