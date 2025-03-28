"use client";
import { useStateContext } from "@/app/(web)/providers/provider";
import HeroContent from "./HeroContent";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const { refCallback }: any = useStateContext();
  return (
    <>
      <section
        id="inicio"
        className="z-20 flex min-h-screen w-full items-center justify-center"
        ref={refCallback}
      >
        <HeroContent />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 transform"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            <Link href={`#habilidades`}>
              <ArrowDown className="text-white/70" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
