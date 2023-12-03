import { dataMenu } from "@/data";
import Link from "next/link";
import React from "react";
import StarsCanvas from "../../StarBackground";
import { motion } from "framer-motion";
import { menuSlide, slide } from "../../../../../utils/motion";
import Curve from "./Curve";
interface LinksProps {
  func: () => void;
}
export default function Links({ func }: LinksProps) {
  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="absolute top-0 z-10 flex h-screen w-full flex-col items-center border border-[#7042f861] bg-[#030014]  px-12 md:hidden"
      >
        <StarsCanvas className="z-[1] h-screen w-full  " value={1500} />
        <h1 className="z-10 my-10 text-clip bg-gradient-to-r from-purple-500  to-cyan-500 bg-clip-text pb-10  text-6xl font-semibold text-transparent">
          Felipe Lacerda
        </h1>

        <motion.div
          variants={slide}
          initial="initial"
          animate="enter"
          exit="exit"
          className="links flex w-full flex-col gap-6 "
        >
          {dataMenu.map((data, index) => (
            <React.Fragment key={index}>
              <Link
                onClick={func}
                href={data.href}
                className="z-10 text-4xl  font-semibold text-white transition-all duration-300 hover:scale-105"
              >
                {data.name}
              </Link>
            </React.Fragment>
          ))}
        </motion.div>
        <Curve />
      </motion.div>
    </>
  );
}
