"use client";
import { dataSkills } from "@/data";
import SkillCard from "./SkillsCard";
import React from "react";
import { useStateContext } from "@/app/(web)/providers/provider";

export default function Skills() {
  const { refCallback }: any = useStateContext();
  return (
    <>
      <section
        id="habilidades"
        className="container z-20 mx-auto flex w-full flex-col items-center justify-center py-20 "
        ref={refCallback}
      >
        <h2 className="text-clip  bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text pb-10 text-5xl font-semibold text-transparent">
          Habilidades
        </h2>
        <div className="flex flex-wrap justify-center">
          {dataSkills.map((data, index) => (
            <React.Fragment key={data.text}>
              <SkillCard
                src={data.img}
                height={150}
                width={150}
                index={index}
                key={data.text}
                text={data.text}
              />
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}
