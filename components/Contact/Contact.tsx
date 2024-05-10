import Link from "next/link";
import s from "./contact.module.scss";
import Elements from "./Elements";
import { ContactPathOne } from "../Svg/Svg";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Contact = () => {
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP(() => {}, { scope: container });

  const pointerEnter = contextSafe((e: React.MouseEvent) => {
    gsap.to(e.target, { scaleY: 1.4, duration: 0.4, ease: "power3" });
  });
  const pointerLeave = contextSafe((e: React.MouseEvent) => {
    gsap.to(e.target, { scaleY: 1, duration: 0.4, ease: "power3" });
  });

  return (
    <section ref={container} id="contact" className={s.main}>
      <Elements />
      <h1 className="contact-heading">
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          C
        </span>
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          o
        </span>
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          n
        </span>
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          t
        </span>
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          a
        </span>
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          c
        </span>
        <span onMouseEnter={pointerEnter} onMouseLeave={pointerLeave}>
          t
        </span>
      </h1>
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
            <Link href="mailto:philippe@layani.net">philippe@layani.net</Link>
          </p>
          <p>
            Phone: <Link href="tel:+491775252255">+49 177 52 52 255</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
