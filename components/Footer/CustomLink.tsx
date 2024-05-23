import { useRef } from "react";
import RandomLetter from "./RandomLetter";
import s from "./footer.module.scss";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CustomLink = ({ text, href }: { text: string; href: string }) => {
  const container = useRef<HTMLAnchorElement>(null);

  const { contextSafe } = useGSAP(
    () => {
      gsap.set(".outside", { opacity: 0 });
    },
    { scope: container }
  );

  const handlePointerEnter = contextSafe(() => {
    gsap
      .timeline({
        defaults: { ease: "power4" },
      })
      .to(".inside", {
        opacity: 0,
        stagger: {
          amount: 0.5,
          from: "random",
        },
      })
      .to(
        ".outside",
        {
          opacity: 1,
          stagger: {
            amount: 0.5,
            from: "random",
          },
        },
        "<0.1"
      )
      .to(
        ".outside",
        {
          y: 100,
          opacity: 0,
          duration: 2,
          stagger: {
            amount: 0.5,
            from: "random",
          },
        },
        "<0.5"
      )
      .to(".inside", { opacity: 1 }, "<0.2")
      .set(".outside", { y: 0 });
  });

  return (
    <Link
      href={href}
      target="_blank"
      onPointerEnter={handlePointerEnter}
      ref={container}
      className={`${s.link} custom-link`}
    >
      <div>
        {Array.from(text).map((e, i) => {
          return (
            <span className="inside" key={i}>
              {e}
            </span>
          );
        })}
      </div>
      <div className={s.link_box}>
        {Array.from(text).map((e, i) => {
          return (
            <span className="outside" key={i}>
              <RandomLetter />
            </span>
          );
        })}
      </div>
    </Link>
  );
};

export default CustomLink;
