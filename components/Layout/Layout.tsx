import { useRef } from "react";
import Header from "../Header/Header";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const container = useRef<HTMLElement>(null);
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
                start: "top 80%",
                toggleActions: "play none none reverse",
                fastScrollEnd: isDesktop,
                preventOverlaps: isDesktop,
              },
              defaults: {
                ease: Power4.easeInOut,
              },
            })
            .from(".showreel-heading span", {
              yPercent: 100,
              opacity: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3",
            })
            .to(document.body, { backgroundColor: "#EAFCF8" }, "<1.2");

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
                start: "top 80%",
                toggleActions: "play none none reverse",
                fastScrollEnd: isDesktop,
                preventOverlaps: isDesktop,
              },
              defaults: {
                ease: Power4.easeInOut,
              },
            })
            .from(".work-heading span", {
              yPercent: 100,
              opacity: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3",
            })
            .to(document.body, { backgroundColor: "#EBEBEB" }, "<1.2");

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
            .from(".archive-heading span", {
              yPercent: 100,
              opacity: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3",
            })
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
            .from(".client-heading span", {
              yPercent: 100,
              opacity: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3",
            })
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
            .from(".about-heading span", {
              yPercent: 100,
              opacity: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3",
            })
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
            .from(".contact-heading span", {
              yPercent: 100,
              opacity: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3",
            })
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
                start: "top 80%",
                toggleActions: "play none none reverse",
                fastScrollEnd: isDesktop,
                preventOverlaps: isDesktop,
              },
              defaults: {
                ease: Power4.easeInOut,
              },
            })
            .from(".service-heading span", {
              yPercent: 100,
              opacity: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3",
            })
            .to(document.body, { backgroundColor: "#EBEBEB" }, "<1.2");
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

          gsap.timeline({
            scrollTrigger: {
              trigger: "#service-grid",
              start: "top 20%",
              toggleActions: "play none none reverse",
              fastScrollEnd: true,
              preventOverlaps: true,
            },
            defaults: {
              ease: Power4.easeInOut,
            },
          });
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
            .from(".footer-star-1", { scale: 0, rotate: 360 })
            .from(".footer-star-2", { scale: 0, rotate: 360 }, "<0.2")
            .from(".footer-path-4", { xPercent: -100 }, "<0.2")
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
            })
            .from(".footer-path-3 path", { scale: 0, stagger: 0.04 }, "<0.2");
        }
      );

      xTo.current = gsap.quickTo(".mouse", "x", {
        duration: 0.8,
        ease: "power4",
      });
      yTo.current = gsap.quickTo(".mouse", "y", {
        duration: 0.8,
        ease: "power4",
      });
    },
    { scope: container }
  );

  const moveMover = contextSafe((e: React.MouseEvent) => {
    xTo.current!(e.clientX - 5);
    yTo.current!(e.clientY - 5);
  });

  return (
    <main onMouseMove={moveMover} ref={container}>
      <div className="mouse" />
      <Header />
      {children}
    </main>
  );
};

export default Layout;
