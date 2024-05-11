import { useRef, useState } from "react";
import { Logo, MenuLine } from "../Svg/Svg";
import s from "./header.module.scss";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import Elements from "./Elements";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuElements from "./MenuElements";
import Image from "next/image";

const Header = () => {
  const container = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState<string>();
  const { asPath } = useRouter();
  const tl = useRef<GSAPTimeline>();

  const { contextSafe } = useGSAP(
    () => {
      //hero elements
      gsap
        .timeline({
          defaults: { ease: Power4.easeInOut, duration: 2 },
          onComplete: () => {
            gsap.to(".path-1", {
              keyframes: [{ y: 20 }, { y: -20 }, { y: 0 }],
              duration: 5,
              repeat: -1,
            });
            gsap.to(".path-2", {
              keyframes: [
                { rotate: 120, scale: 0.9 },
                { rotate: 180, scale: 1.1 },
                { rotate: 360, scale: 1 },
              ],
              duration: 10,
              repeat: -1,
            });
          },
        })
        .from(".path-1", { y: -200 })
        .from(".path-2", { y: -200, scale: 0 }, "<0.4");

      //menu animation
      tl.current = gsap
        .timeline({
          defaults: { ease: Power4.easeInOut, duration: 2 },
          reversed: true,
        })
        .to(".line-1", { top: "50%", y: "-50%", rotate: 45, duration: 0.5 })
        .to(
          ".line-2",
          { top: "50%", y: "-50%", rotate: -45, duration: 0.5 },
          "<"
        )
        .from(".large", { opacity: 0, duration: 0.5 })
        .to(".large", { rotate: -90, scale: 2 })
        .to(".large-text-1", { xPercent: 80, duration: 3 }, "<1.5")
        .to(".large-text-2", { xPercent: -80, duration: 3 }, "<")
        .to(".large", { opacity: 0 }, "<1.2")
        .from(".menu", { clipPath: "inset(100% 0% 0% 0%)" }, "<")
        .from(".path-menu-1", { x: -400, y: -100 }, "<0.2")
        .from(".path-menu-2", { x: -500, y: 100 }, "<0.2")
        .from(".path-menu-3 path", { y: -100, stagger: 0.1, opacity: 0 }, "<")
        .from(".path-menu-4", { x: 500, y: -400, rotate: 360 }, "<0.2")
        .from(".path-menu-6", { x: 500, y: 1000, rotate: 360 }, "<0.2")
        .from(
          ".path-menu-7",
          { xPercent: 100, yPercent: -1000, scale: 3 },
          "<0.2"
        )
        .from(".path-menu-8", { yPercent: 300, rotate: 360 }, "<0.2")
        .from(
          ".path-menu-5 path",
          { y: -100, x: 400, stagger: 0.1, opacity: 0, duration: 0.5 },
          "<"
        )
        .from(".menu-link", { yPercent: 100, opacity: 0, stagger: 0.2 }, "<0.2")
        .from(".menu-social", { yPercent: 100, opacity: 0 }, "<0.2");
    },
    { scope: container }
  );

  const handleClick = contextSafe(() => {
    if (!tl.current!.reversed()) {
      document.body.style.overflow = "";
      if (innerWidth > 800) document.body.style.paddingRight = "";
    } else {
      document.body.style.overflow = "hidden";
      if (innerWidth > 800) document.body.style.paddingRight = "16px";
    }

    tl.current!.reversed(!tl.current!.reversed());
  });

  useGSAP(
    () => {
      gsap.to(".menu", { backgroundColor: color });
    },
    { dependencies: [color], scope: container }
  );

  return (
    <div ref={container}>
      <div className={`large ${s.large}`}>
        {[...Array(20)].map((e, i) => {
          return (
            <div key={i}>
              <h1 className="large-text-1">Phlippe Layani Phlippe Layani</h1>
              <h1 className="large-text-2">
                Digital Designer Digital Designer
              </h1>
            </div>
          );
        })}
      </div>
      <Elements />
      <header className={s.main}>
        <div className={s.logo}>
          <Logo />
        </div>
        <div className={s.menuBtn}>
          <button onClick={handleClick}>
            Menu
            <div>
              <span className="line-1" />
              <span className="line-2" />
            </div>
          </button>
        </div>
      </header>

      <nav className={`menu ${s.menu}`}>
        <MenuElements />
        <div className={s.menu_grid}>
          {[
            { heading: "Work", color: "#ADDBD0" },
            { heading: "Archive", color: "#83D398" },
            { heading: "Clients", color: "#C1927F" },
            { heading: "Services", color: "#FFD95D" },
            { heading: "About", color: "#FF9293" },
            { heading: "Contact", color: "#D6C2E4" },
          ].map((e, i) => {
            return (
              <div
                onPointerEnter={() => setColor(e.color)}
                onPointerLeave={() => setColor("#F6F2E9")}
                className={s.menuCover}
              >
                <MenuLine />
                <div key={i} className={s.menu3D}>
                  <div className={s.menu3D_bottom}>
                    <Link
                      className="menu-link"
                      href={`#${e.heading.toLowerCase()}`}
                    >
                      {e.heading}
                      <span>0{i + 1}</span>
                    </Link>
                  </div>
                  <div className={s.menu3D_front}>
                    <Link
                      className="menu-link"
                      href={`#${e.heading.toLowerCase()}`}
                    >
                      {e.heading}
                      <span>0{i + 1}</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <Link
            className="menu-link"
            data-active={asPath === "/#archive"}
            href="#archive"
          >
            Archive<span>02</span>
          </Link>
          <Link
            className="menu-link"
            data-active={asPath === "/#clients"}
            href="#clients"
          >
            Clients<span>03</span>
          </Link>
          <Link
            className="menu-link"
            data-active={asPath === "/#services"}
            href="#services"
          >
            Services<span>04</span>
          </Link>
          <Link
            className="menu-link"
            data-active={asPath === "/#about"}
            href="#about"
          >
            About<span>05</span>
          </Link>
          <Link
            className="menu-link"
            data-active={asPath === "/#contact"}
            href="#contact"
          >
            Contact<span>06</span>
          </Link> */}
        </div>
        <div className={`menu-social ${s.menu_social}`}>
          <Link href="#">Linkedin</Link>
          <Link href="#">Instagram</Link>
          <Link href="#">Behance</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
