import Image from "next/image";
import s from "./client.module.scss";
import Elements from "./Elements";
import { useRef } from "react";
import SplitType from "split-type";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ClientsHeading } from "../Svg/Svg";
import Marquee from "react-fast-marquee";

const Client = () => {
  const container = useRef<HTMLDivElement>(null);
  const para = useRef<HTMLParagraphElement>(null);
  const paraHide = useRef<HTMLParagraphElement>(null);

  useIsomorphicLayoutEffect(() => {
    SplitType.create(para.current!, {
      types: "lines",
      lineClass: "client-para-lines",
    });
    SplitType.create(paraHide.current!, {
      types: "lines",
    });
  }, [para.current, paraHide.current]);

  const { contextSafe } = useGSAP(() => {}, { scope: container });

  return (
    <section ref={container} id="client" className={s.main}>
      {/* <h2 className={s.tag}>03 Clients</h2> */}
      <Elements />
      <div className={`client-heading ${s.heading}`}>
        <ClientsHeading />
      </div>
      <div className={s.grid}>
        <div className={`client-grid ${s.grid_logos}`}>
          <Marquee>
            {[...Array(38)].map((e, i) => {
              return (
                <Image
                  key={i}
                  className={`client-logo ${s.grid_logo}`}
                  src={`/clients/${i}.png`}
                  height={1000}
                  width={1000}
                  alt="logo"
                />
              );
            })}
          </Marquee>
          <Marquee direction="right">
            {[...Array(38)].map((e, i) => {
              return (
                <Image
                  key={i}
                  className={`client-logo ${s.grid_logo}`}
                  src={`/clients/${i}.png`}
                  height={1000}
                  width={1000}
                  alt="logo"
                />
              );
            })}
          </Marquee>
        </div>
        <div className={`client-grid-para ${s.grid_para}`}>
          <p ref={para}>
            I have worked with a wide range of clients and start-ups in
            industries such as healthcare, education, e-commerce, automotive and
            finance, helping them to develop effective digital strategies, build
            engaging user interfaces, and create memorable brand experiences.
          </p>
          <p ref={paraHide} className={s.grid_para_hide}>
            I have worked with a wide range of clients and start-ups in
            industries such as healthcare, education, e-commerce, automotive and
            finance, helping them to develop effective digital strategies, build
            engaging user interfaces, and create memorable brand experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Client;
