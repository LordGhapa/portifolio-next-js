"use client";
import { dataSkills } from "@/data";

import React from "react";
import { useStateContext } from "@/app/(web)/providers/provider";
import SectionHeading from "../section-heading";

import SkillsGrid from "./components/skills-grid";

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
        <SkillsGrid />
      </section>
    </>
  );
}
