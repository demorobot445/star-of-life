import { useRef } from "react";
import Header from "../Header/Header";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import { store } from "@/store";
import Preloader from "../Preloader/Preloader";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const container = useRef<HTMLElement>(null);
  const mouseHover = useRef<GSAPTween>();
  const xTo = useRef<gsap.QuickToFunc>();
  const yTo = useRef<gsap.QuickToFunc>();

  const { contextSafe } = useGSAP(
    () => {
      let mm = gsap.matchMedia(),
        breakPoint = 800;

      mm.add(
        {
          isDesktop: `(min-width: ${breakPoint}px)`,
          isMobile: `(max-width: ${breakPoint - 1}px)`,
        },
        (context) => {
          let { isDesktop, isMobile } = context.conditions as {
            isDesktop: boolean;
            isMobile: boolean;
          };

          // showreel

          gsap
            .timeline({
              scrollTrigger: {
                trigger: "#showreel",
                start: "top center",
                toggleActions: "play none none reverse",
                fastScrollEnd: isDesktop,
                preventOverlaps: isDesktop,
              },
              defaults: {
                ease: Power4.easeInOut,
              },
            })
            .from(".showreel-heading path", {
              strokeDashoffset: 1740,
              duration: 3,
              ease: "power3",
            })
            .to(
              ".showreel-heading path",
              {
                duration: 0.8,
                fill: "black",
                ease: "power3",
              },
              "<2"
            );
          // .to(document.body, { backgroundColor: "#EAFCF8" }, "<1.2");

          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".showreel-video",
                start: "top bottom",
                toggleActions: "play none none reverse",
                fastScrollEnd: isDesktop,
                preventOverlaps: isDesktop,
              },
              defaults: {
                ease: Power4.easeInOut,
              },
            })
            .from(".showreel-video", {
              clipPath: "inset(100% 25% 0% 25%)",
              duration: 2,
            });

          //work
          gsap
            .timeline({
              scrollTrigger: {
                trigger: "#work",
                start: "top center",
                toggleActions: "play none none reverse",
                fastScrollEnd: isDesktop,
                preventOverlaps: isDesktop,
              },
              defaults: {
                ease: Power4.easeInOut,
              },
            })
            .from(".work-heading path", {
              strokeDashoffset: 2340,
              duration: 3,
              ease: "power3",
            })
            .to(
              ".work-heading path",
              {
                duration: 0.8,
                fill: "black",
                ease: "power3",
              },
              "<2"
            );
          // .to(document.body, { backgroundColor: "#EBEBEB" }, "<1.2");

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
            .from(".archive-heading path", {
              strokeDashoffset: 1360,
              duration: 3,
              ease: "power3",
            })
            .to(
              ".archive-heading path",
              {
                duration: 0.8,
                fill: "black",
                ease: "power3",
              },
              "<2"
            )
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
            .from(
              ".archive-path-7",
              { xPercent: -80, y: 100, rotate: 360 },
              "<0.2"
            )
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
                start: isDesktop ? "top center" : "top-=50 center",
                toggleActions: "play none none reverse",
                fastScrollEnd: true,
                preventOverlaps: true,
              },
              defaults: {
                ease: Power4.easeInOut,
              },
            })
            // .to(document.body, { backgroundColor: "#fcebe5" })
            .from(
              ".client-heading path",
              {
                strokeDashoffset: 1260,
                duration: 3,
                ease: "power3",
              },
              "<"
            )
            .to(
              ".client-heading path",
              {
                duration: 0.8,
                fill: "black",
                ease: "power3",
              },
              "<2"
            )
            .from(
              ".client-path-1 path",
              { stagger: 0.05, x: 200, scale: 0 },
              "<0.2"
            )
            .from(".client-path-2", { xPercent: 100, y: 100 }, "<0.4");

          if (isDesktop) {
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".client-grid-para",
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
              .from(
                ".client-para-lines",
                {
                  clipPath: "inset(0% 100% 0% 0%)",
                  stagger: 0.2,
                },
                "<"
              );
          } else {
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
              });

            gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".client-grid-para",
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
              .from(".client-para-lines", {
                clipPath: "inset(0% 100% 0% 0%)",
                stagger: 0.2,
              });
          }

          //about
          gsap
            .timeline({
              scrollTrigger: {
                trigger: "#about",
                start: "top center",
                toggleActions: "play none none reverse",
                fastScrollEnd: true,
                preventOverlaps: true,
              },
              defaults: {
                ease: Power4.easeInOut,
              },
            })
            .from(".about-heading path", {
              strokeDashoffset: 1120,
              duration: 3,
              ease: "power3",
            })
            .to(
              ".about-heading path",
              {
                duration: 0.8,
                fill: "black",
                ease: "power3",
              },
              "<2"
            )
            .from(".about-path-2", { xPercent: 70 }, "<0.6");

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
                ease: Power4.easeInOut,
              },
            })
            .from(
              ".about-para-lines",
              {
                clipPath: "inset(0% 100% 0% 0%)",
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
                ease: Power4.easeInOut,
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

          //contact
          gsap
            .timeline({
              scrollTrigger: {
                trigger: "#contact",
                start: "top center",
                toggleActions: "play none none reverse",
                fastScrollEnd: true,
                preventOverlaps: true,
              },
              defaults: {
                ease: Power4.easeInOut,
              },
            })
            .from(".contact-heading path", {
              strokeDashoffset: 1290,
              duration: 3,
              ease: "power3",
            })
            .to(
              ".contact-heading path",
              {
                duration: 0.8,
                fill: "black",
                ease: "power3",
              },
              "<2"
            )
            .from(".contact-path-2", { xPercent: 100 }, "<0.6")
            .to(
              ".contact-path-3 path",
              { strokeDashoffset: 0, duration: 2 },
              "<0.2"
            );

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
                ease: Power4.easeInOut,
              },
            })
            .from(".contact-grid p", {
              clipPath: "inset(100% 0% 0% 0%)",
              stagger: 0.2,
            })
            .from(".contact-path-1", { scale: 0 });

          //service
          gsap
            .timeline({
              scrollTrigger: {
                trigger: "#service",
                start: "top center",
                toggleActions: "play none none reverse",
                fastScrollEnd: isDesktop,
                preventOverlaps: isDesktop,
              },
              defaults: {
                ease: Power4.easeInOut,
              },
            })
            .from(".services-heading path", {
              strokeDashoffset: 1500,
              duration: 3,
              ease: "power3",
            })
            .to(
              ".services-heading path",
              {
                duration: 0.8,
                fill: "black",
                ease: "power3",
              },
              "<2"
            );
          // .to(document.body, { backgroundColor: "#EBEBEB" }, "<1.2");
          // gsap.timeline({
          //   scrollTrigger: {
          //     trigger: "#service",
          //     start: "top center",
          //     toggleActions: "play none none reverse",
          //     fastScrollEnd: true,
          //     preventOverlaps: true,
          //   },
          //   defaults: {
          //     ease: Power4.easeInOut,
          //   },
          // });
          // .from(".service-heading", {
          //   yPercent: 100,
          //   opacity: 0,
          //   duration: 1,
          // })
          // .from(".service-path-2", { xPercent: -100 }, "<0.6")
          // .from(".service-path-1 path", { scale: 0, stagger: 0.1 }, "<0.2")
          // .from(
          //   ".service-path-6 path",
          //   { scale: 0, stagger: 0.05, x: 200, y: -200 },
          //   "<0.2"
          // );

          // gsap.timeline({
          //   scrollTrigger: {
          //     trigger: "#service-grid",
          //     start: "top 20%",
          //     toggleActions: "play none none reverse",
          //     fastScrollEnd: true,
          //     preventOverlaps: true,
          //   },
          //   defaults: {
          //     ease: Power4.easeInOut,
          //   },
          // });
          // .from(".service-path-4", { xPercent: -100 })
          // .from(".service-path-3", { xPercent: 150, rotate: 180 }, "<0.2")
          // .from(".service-path-5", { yPercent: 100, scale: 0 }, "<0.2");

          //footer
          gsap
            .timeline({
              scrollTrigger: {
                trigger: "#footer",
                start: "top center",
                toggleActions: "play none none reverse",
                fastScrollEnd: true,
                preventOverlaps: true,
              },
              defaults: {
                ease: Power4.easeInOut,
              },
            })
            // .from(".call", { opacity: 0, y: 200 })
            // .from(".footer-star-1", { scale: 0, rotate: 360 })
            .from(".footer-star-2", { scale: 0, rotate: 360 })
            // .from(".footer-path-4", { xPercent: -100 }, "<0.2")
            .from(
              ".footer-path-1 path",
              { xPercent: 100, stagger: 0.1 },
              "<0.2"
            )
            .from(".footer-path-5 ", { yPercent: 100 }, "<0.2")
            .from(
              ".footer-nav-1 a",
              { clipPath: "inset(100% 0% 0% 0%)", stagger: 0.1 },
              "<0.2"
            )
            .from(".footer-nav-2 a", {
              clipPath: "inset(100% 0% 0% 0%)",
              stagger: 0.1,
            });
          // .from(".footer-path-3 path", { scale: 0, stagger: 0.04 }, "<0.2");
        }
      );

      xTo.current = gsap.quickTo(".mouse", "x", {
        duration: 0.01,
        ease: "none",
      });
      yTo.current = gsap.quickTo(".mouse", "y", {
        duration: 0.01,
        ease: "none",
      });

      mouseHover.current = gsap.to(".mouse", {
        scale: 0.4,
        ease: "power4",
        duration: 0.8,
        "backdrop-filter": "invert(0%)",
        paused: true,
      });

      let tl = gsap
        .timeline({ paused: true })
        .to(".mouse", { scale: 1 })
        .to(".mousepara", { opacity: 1 }, "<0.4");

      store.workHeadingPointerEnter = () => {
        tl.play();
      };
      store.workHeadingPointerLeave = () => {
        tl.reverse();
      };
    },
    { scope: container }
  );

  const moveMover = contextSafe((e: React.MouseEvent) => {
    xTo.current!(e.clientX - 90);
    yTo.current!(e.clientY - 90);
  });

  const handlePointerEnter = contextSafe(() => {
    gsap
      .timeline()
      .to(".menuinside", { opacity: 0, stagger: 0.1 })
      .to(".menuoutside", { opacity: 1, stagger: 0.1 }, "<")
      .to(
        ".menuoutside",
        {
          keyframes: { y: [0, 80, 0], opacity: [1, 0, 0] },
          stagger: {
            amount: 0.1,
            from: "random",
          },
          duration: 1.5,
        },
        "<0.1"
      )
      .to(".menuinside", { opacity: 1, duration: 0.2, stagger: 0.1 }, "<0.3");
    mouseHover.current?.play();
  });
  const handlePointerLeave = contextSafe(() => {
    mouseHover.current?.reverse();
  });

  return (
    <main onMouseMove={moveMover} ref={container}>
      <div className="mouse">
        <p className="mousepara">View</p>
      </div>
      <Preloader />
      <Header
        menuBtnEnter={handlePointerEnter}
        menuBtnLeave={handlePointerLeave}
      />
      {children}
    </main>
  );
};

export default Layout;
