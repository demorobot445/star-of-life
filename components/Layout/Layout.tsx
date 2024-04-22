import { useRef } from "react";
import Header from "../Header/Header";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // showreel
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#hero",
            end: "bottom center",
            toggleActions: "none play reverse none",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          defaults: {
            ease: Power4.easeInOut,
          },
        })
        .from(".path-6 path", { strokeDashoffset: 2600, duration: 2 })
        .from(".path-3", { xPercent: -100 }, "<0.2")
        .from(".path-4", { xPercent: -100 }, "<0.2")
        .from(
          ".path-7 path",
          { x: -550, y: -200, scale: 2, stagger: 0.04 },
          "<0.2"
        );
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#showreel",
            start: "top center",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          defaults: {
            ease: Power4.easeInOut,
          },
        })
        .from(".showreel-heading", { yPercent: 100, opacity: 0, duration: 1 })
        .from(".path-9 path", { x: -400, stagger: 0.04 }, "<")
        .to(
          ".path-3",
          {
            xPercent: 100,
            y: 400,
            scale: 4,
            rotate: 360,
            zIndex: -1,
            duration: 2,
          },
          "<0.2"
        )
        .to(".path-3 path", { fill: "#EAFCF8" }, "<0.8")
        .to(document.body, { backgroundColor: "#EAFCF8" }, "<1.2");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".showreel-video",
            start: "top center",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          defaults: {
            ease: Power4.easeInOut,
          },
        })
        .from(
          ".showreel-video",
          { clipPath: "inset(100% 0% 0% 0%)", duration: 2 },
          "<0.2"
        )
        .from(".path-8", { x: 400 })
        .from(".path-10 path", { scale: 0, stagger: 0.1 }, "<0.2");

      //work

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#showreel",
            end: "bottom center",
            toggleActions: "none play reverse none",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          defaults: {
            ease: Power4.easeInOut,
          },
        })
        .from(".work-path-1", { xPercent: 50 })
        .from(".work-path-3", { y: -200, xPercent: 50 }, "<0.4")
        .from(".work-path-3", { rotate: 10, duration: 0.2 })
        .from(".work-path-3", { rotate: -10, duration: 0.2 })
        .from(".work-path-3", { rotate: -0, duration: 0.2 })
        .from(
          ".work-path-2",
          { xPercent: 100, yPercent: -150, rotate: 180, scale: 0 },
          "<"
        )
        .from(".work-path-4", { x: -400 }, "<0.2");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#work",
            start: "top center",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          defaults: {
            ease: Power4.easeInOut,
          },
        })
        .from(".work-main-heading", { yPercent: 100, opacity: 0, duration: 1 })
        .to(".work-path-1", { xPercent: -25, scale: 3, duration: 2 }, "<0.2")
        .to(".work-path-1 path", { fill: "#FAF2FF" }, "<0.8")
        .to(document.body, { backgroundColor: "#FAF2FF" }, "<1.2")
        .from(
          ".work-path-6",
          {
            scale: 0,
            onComplete: () => {
              gsap.to(".work-path-6", {
                rotate: 360,
                repeat: -1,
                duration: 20,
                ease: "none",
              });
            },
          },
          "<0.2"
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".work-slider",
            start: "top center",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          defaults: {
            ease: Power4.easeInOut,
          },
        })
        .from(".work-path-5", { xPercent: -100, scale: 0 })
        .from(".work-dot", { x: -100, opacity: 0, stagger: 0.1 }, "<0.2");

      //archive
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#archive",
            start: "top center",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          defaults: {
            ease: Power4.easeInOut,
          },
        })
        .from(".archive-heading", { yPercent: 100, opacity: 0, duration: 1 })
        .from(
          ".archive-path-1",
          { clipPath: "inset(0% 0% 0% 100%)", duration: 1 },
          "<0.6"
        )
        .from(".archive-path-2", { x: 500 }, "<0.2");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".archive-path-3",
            start: "top center",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          defaults: {
            ease: Power4.easeInOut,
          },
        })
        .from(".archive-path-3", { xPercent: 50 })
        .to(".archive-path-3", { rotate: -35 }, "<0.2")
        .to(".archive-path-3", { rotate: 0 }, "<0.5")
        .from(".archive-path-4", { xPercent: -50, scale: 0 }, "<0.2");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".archive-path-6",
            start: "top center",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          defaults: {
            ease: Power4.easeInOut,
          },
        })
        .from(".archive-path-6", { xPercent: -50, scale: 0 })
        .from(".archive-path-7", { xPercent: -80, y: 100, rotate: 360 }, "<0.2")
        .from(".archive-path-5", { xPercent: 80 }, "<0.2");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".archive-path-8",
            start: "top center",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          defaults: {
            ease: Power4.easeInOut,
          },
        })
        .from(".archive-path-10", { xPercent: -500 })
        .from(".archive-path-9", { xPercent: -500 }, "<")
        .from(".archive-path-8", { scale: 0, rotate: 180 }, "<0.2");

      gsap.from(".archive-path-11 path", {
        ease: Power4.easeInOut,
        stagger: 0.1,
        scale: 0,
        scrollTrigger: {
          trigger: ".archive-path-11",
          start: "top center",
          toggleActions: "play none none reverse",
          fastScrollEnd: true,
          preventOverlaps: true,
        },
      });

      //client
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#client",
            start: "top center",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          defaults: {
            ease: Power4.easeInOut,
          },
        })
        .from(".client-heading", { yPercent: 100, opacity: 0, duration: 1 })
        .from(
          ".client-path-1 path",
          { stagger: 0.05, x: 200, scale: 0 },
          "<0.2"
        )
        .from(".client-path-2", { xPercent: 100, y: 100 }, "<0.4");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".client-grid",
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            preventOverlaps: true,
            scrub: true,
          },
          defaults: {
            ease: Power4.easeInOut,
          },
        })
        .from(".client-logo", {
          clipPath: "inset(100% 0% 0% 0%)",
          stagger: 0.1,
        })
        .from(
          ".client-para-lines",
          {
            clipPath: "inset(0% 100% 0% 0%)",
            stagger: 0.2,
          },
          "<"
        );
    },
    { scope: container }
  );

  return (
    <main ref={container}>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
