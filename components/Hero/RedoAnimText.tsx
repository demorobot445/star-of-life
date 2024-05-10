"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import React, { ReactHTML, useEffect } from "react";
import {
  BERLINSVGAnimation,
  VIENNASVGAnimation,
  BRANDSVGAnimation,
  GreeenTop,
  YellowCiricle,
  TAILORMADESVGAnimation,
  UXSVGAnimation,
} from "./AnimatedSVG";
export interface IRedoAnimTextProps {
  delay: number;
  text: String;
}

export default function RedoAnimText({ delay, text }: IRedoAnimTextProps) {
  const textIndex = useMotionValue(0);
  const texts = [text];
  const baseText = useTransform(textIndex, (latest) => texts[latest]);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);
  const animatedText =
    "Philippe Layani is a Berlin - and Vienna -based digital breakLine UX designer who blends creativity, technology, and breakLine strategy to develop exceptional,  tailor - made interactive breakLine experiences that connect brands with theiraudiences.".split(
      " "
    );
  useEffect(() => {
    animate(count, 300, {
      type: "tween",
      delay: delay,
      duration: 8,
      ease: "easeIn",
      // repeat: Infinity,
      // repeatType: "reverse",
      // repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {animatedText.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: i / 10,
          }}
          key={i}
          className="animated_svg_style text-[3rem] "
        >
          {el === "Berlin" ? (
            <BERLINSVGAnimation />
          ) : el === "Vienna" ? (
            <VIENNASVGAnimation />
          ) : el === "UX" ? (
            <UXSVGAnimation />
          ) : el === "creativity," ? (
            <span className=" font-bold capitalize"> Creativity,</span>
          ) : el === "experiences" ? (
            <span className=" font-bold capitalize"> experiences ,</span>
          ) : el === "tailor" ? (
            <TAILORMADESVGAnimation />
          ) : el === "brands" ? (
            <BRANDSVGAnimation />
          ) : el === "breakLine" ? (
            <div />
          ) : (
            el
          )}{" "}
        </motion.span>
      ))}
    </>
  );
  // <motion.span className="inline text-4xl">{displayText}</motion.span>
}
