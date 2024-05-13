"use client";
import { useStateContext } from "@/app/(web)/providers/provider";
import HeroContent from "./HeroContent";

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
      </section>
    </>
  );
}
