import { useRef, useState } from "react";
import { Logo, MenuLine } from "../Svg/Svg";
import s from "./header.module.scss";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import Elements from "./Elements";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuElements from "./MenuElements";

const Header = () => {
  const [color, setColor] = useState<string>();
  const container = useRef<HTMLDivElement>(null);
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
        .to(".large-text", { xPercent: 80, duration: 3 }, "<1.5")
        .to(".large", { opacity: 0 }, "<1")
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

  useGSAP(
    () => {
      gsap.to(".menu", { backgroundColor: color });
    },
    { dependencies: [color], scope: container }
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

  return (
    <div ref={container}>
      <div className={`large ${s.large}`}>
        {[...Array(20)].map((e, i) => {
          return (
            <div key={i}>
              <h1 className="large-text">Phlippe Layani Phlippe Layani</h1>
              <h1 className="large-text">Digital Designer Digital Designer</h1>
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
          <Link
            className="menu-link"
            onPointerEnter={() => setColor("#ADDBD0")}
            onPointerLeave={() => setColor("#F6F2E9")}
            data-active={asPath === "/#work"}
            href="#work"
          >
            Work<span>01</span>
            <MenuLine />
          </Link>
          <Link
            className="menu-link"
            onPointerEnter={() => setColor("#83D398")}
            onPointerLeave={() => setColor("#F6F2E9")}
            data-active={asPath === "/#archive"}
            href="#archive"
          >
            Archive<span>02</span>
            <MenuLine />
          </Link>
          <Link
            className="menu-link"
            onPointerEnter={() => setColor("#C1927F")}
            onPointerLeave={() => setColor("#F6F2E9")}
            data-active={asPath === "/#clients"}
            href="#clients"
          >
            Clients<span>03</span>
            <MenuLine />
          </Link>
          <Link
            className="menu-link"
            onPointerEnter={() => setColor("#FFD95D")}
            onPointerLeave={() => setColor("#F6F2E9")}
            data-active={asPath === "/#services"}
            href="#services"
          >
            Services<span>04</span>
            <MenuLine />
          </Link>
          <Link
            className="menu-link"
            onPointerEnter={() => setColor("#FF9293")}
            onPointerLeave={() => setColor("#F6F2E9")}
            data-active={asPath === "/#about"}
            href="#about"
          >
            About<span>05</span>
            <MenuLine />
          </Link>
          <Link
            className="menu-link"
            onPointerEnter={() => setColor("#D6C2E4")}
            onPointerLeave={() => setColor("#F6F2E9")}
            data-active={asPath === "/#contact"}
            href="#contact"
          >
            Contact<span>06</span>
            <MenuLine />
          </Link>
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
