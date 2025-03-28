"use client";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../../utils/motion";
import { RiSparklingFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import AnimatedText from "../../../utils/animated-text";

export default function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="z-20 container flex h-full w-full flex-col items-center justify-center px-4 pt-20 xl:flex-row xl:pt-0"
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 text-start xl:items-start">
        {/* BADGE COM ESTRELINHA */}
        <motion.div
          className="Welcome-box border border-[#7042f88b] px-4 py-4 opacity-90"
          variants={slideInFromTop}
        >
          <RiSparklingFill className="mr-1 h-5 w-5 text-[#b49bff]" />
          <h1 className="Welcome-text text-base">
            Desenvolvedor Front-End Portfolio
          </h1>
        </motion.div>
        {/* nome e função */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="font-bold text-white"
        >
          <span className="flex flex-col">
            <span className="bg-linear-to-r from-purple-500 to-cyan-500 bg-clip-text text-center text-4xl text-transparent md:text-5xl lg:text-6xl xl:text-left xl:text-[90px]">
              {" "}
              Felipe Lacerda{" "}
            </span>
            <span className="text-center text-xl lg:text-2xl xl:text-left xl:text-5xl">
              Desenvolvedor Front-End
            </span>
          </span>
        </motion.div>

        <AnimatedText
          text="A minha jornada no mundo do desenvolvimento web começou com o React e o Next.js e desde então tenho trabalhado para aprimorar minhas habilidades e criar sites e aplicativos envolventes."
          className="max-w-[768px] text-center font-sans text-base text-gray-300 md:text-xl xl:text-left"
          delay={0.2}
        />

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex w-full items-center justify-center gap-5 xl:justify-start"
        >
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/felipe-lacerda-oliveira/"
            className="button-primary w-full max-w-[200px] cursor-pointer rounded-lg py-2 text-center text-white transition-all duration-100 hover:scale-105"
          >
            LinkedIn
          </Link>
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1ZjvDPdwaIPbYb_HNpUTJQ-T7RUgOkkmt/view"
            className="button-primary w-full max-w-[200px] cursor-pointer rounded-lg py-2 text-center text-white transition-all duration-100 hover:scale-105"
          >
            Currículo
          </Link>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex h-full w-full items-center justify-center md:max-w-md xl:max-w-lg"
      >
        <Image
          src="/pc-image.svg"
          alt="hero image computador e mãos programando"
          height={650}
          width={650}
          className="aspect-square"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
