"use client";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../../../utils/motion";
import { RiSparklingFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

export default function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="container z-20 mx-auto flex w-full flex-col  items-center justify-center px-5 pt-16 lg:flex-row "
    >
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-5 text-start">
        <motion.div
          className="Welcome-box border border-[#7042f88b] px-4 py-4  opacity-90"
          variants={slideInFromTop}
        >
          <RiSparklingFill className=" mr-1 h-5 w-5 text-[#b49bff] " />
          <h1 className="Welcome-text text-[13px] ">
            Desenvolvedor Front-End Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-6xl font-bold text-white lg:max-w-[600px] "
        >
          <span className="flex flex-col ">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-6xl text-transparent">
              {" "}
              Felipe Lacerda{" "}
            </span>
            <span className="text-4xl">Desenvolvedor Front-End</span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="my-5 max-w-[600px] text-lg text-gray-300  "
        >
          A minha jornada no mundo do desenvolvimento web começou com o{" "}
          <span className="font-bold">React</span> e o{" "}
          <span className="font-bold">Next.js</span> e desde então tenho
          trabalhado para aprimorar minhas habilidades e criar sites e
          aplicativos envolventes.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex w-full  items-center justify-start gap-5"
        >
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/felipe-lacerda-oliveira/"
            className="button-primary w-full max-w-[200px] cursor-pointer rounded-lg py-2 text-center text-white "
          >
            LinkedIn
          </Link>
          <Link
            target="_blank"
            href="https://docs.google.com/document/d/1f2AvtA-B474p7bU9rTQ4PnzbaBuy6keKNxuNtGzWSkA"
            className="button-primary w-full max-w-[200px] cursor-pointer rounded-lg py-2 text-center text-white"
          >
            Currículo
          </Link>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex h-full w-full items-center justify-center"
      >
        <Image
          src="/pc-image.svg"
          alt="hero image computador e mãos programando"
          height={650}
          width={650}
          priority
        />
      </motion.div>
    </motion.div>
  );
}
