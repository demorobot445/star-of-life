import Link from "next/link";
import s from "./contact.module.scss";
import { ContactHeading, ContactPathOne } from "../Svg/Svg";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const Contact = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top 40%",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          defaults: {
            ease: "power4.inOut",
          },
        })
        .from(".contact-heading path", {
          strokeDashoffset: 1290,
          duration: 0.8,
          ease: "none",
        })
        .to(".contact-heading path", {
          duration: 0.8,
          fill: "black",
          ease: "power3",
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".contact-grid",
            start: "top center",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          defaults: {
            ease: "power4.inOut",
          },
        })
        .from(".contact-grid p", {
          clipPath: "inset(100% 0% 0% 0%)",
          stagger: 0.2,
        });
    },
    { scope: container }
  );

  return (
    <section ref={container} id="contact" className={s.main}>
      <div className={`contact-heading ${s.heading}`}>
        <ContactHeading />
      </div>
      <div className={`contact-grid ${s.grid}`}>
        <p>
          Lets start a project together
          <span className={`contact-path-1 ${s.pathOne}`}>
            <ContactPathOne />
          </span>
        </p>
        <div className={s.box}>
          <p>
            Mail:{" "}
            <Link scroll={false} href="mailto:philippe@layani.net">
              philippe@layani.net
            </Link>
          </p>
          <p>
            Phone:{" "}
            <Link scroll={false} href="tel:+491775252255">
              +49 177 52 52 255
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
