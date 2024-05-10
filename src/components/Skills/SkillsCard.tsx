"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  text: string;
  width: number;
  height: number;
  index: number;
}

export default function SkillCard({ src, width, height, index, text }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const imageVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const animationDelay = 0.1;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex flex-col items-center gap-2 "
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt="skill image"
        className="h-[150px] w-auto"
      />
      <p className="text-white">{text}</p>
    </motion.div>
  );
}
