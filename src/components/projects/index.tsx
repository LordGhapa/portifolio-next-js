"use client";
import ProjectCard2 from "./ProjectCard";
import React from "react";
import { useStateContext } from "@/app/(web)/providers/provider";
import { ProjectsModel } from "@/models";

interface ProjectsProps {
  data: ProjectsModel[];
}

export default function Projects({ data }: ProjectsProps) {
  // console.log(data);
  const { refCallback }: any = useStateContext();

  return (
    <>
      <div
        id="projetos"
        className="z-20 flex  flex-col items-center justify-center py-20"
        ref={refCallback}
      >
        <h2 className="text-clip bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text pb-20 text-5xl font-semibold text-transparent">
          Projetos
        </h2>
        <div className="cardsComponent  flex h-full w-full	max-w-[1536px] flex-col flex-wrap items-center justify-center gap-10 px-2  lg:flex-row">
          {data.map((card, index) => (
            <React.Fragment key={index}>
              <ProjectCard2
                src={card.urlforimage}
                title={card.projectName}
                link={card.slug}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
