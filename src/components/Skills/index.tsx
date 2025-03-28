"use client";
import { dataSkills } from "@/data";
import SkillCard from "./SkillsCard";
import React from "react";
import { useStateContext } from "@/app/(web)/providers/provider";
import SectionHeading from "../section-heading";

export default function Skills() {
  const { refCallback }: any = useStateContext();
  return (
    <>
      <section
        id="habilidades"
        className="z-20 container mx-auto flex w-full flex-col items-center justify-center py-20"
        ref={refCallback}
      >
           <SectionHeading
            title="Habilidades"
            subtitle="Tecnologias e ferramentas que utilizo no meu dia a dia como desenvolvedor."
          />
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
