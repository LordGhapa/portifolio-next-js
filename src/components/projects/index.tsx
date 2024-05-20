"use client";
import ProjectCard from "./ProjectCard";
import React from "react";
import { useStateContext } from "@/app/(web)/providers/provider";
import { ProjectsModel } from "@/models";
import Link from "next/link";

interface ProjectsProps {
  data: ProjectsModel[];
}

export default function Projects({ data }: ProjectsProps) {
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
              <ProjectCard
                src={card.urlforimage}
                title={card.projectName}
                link={card.slug}
              />
            </React.Fragment>
          ))}
          <Link
            href="/projetos"
            className="button-primary w-full max-w-[200px] cursor-pointer rounded-lg py-2 text-center text-white  transition-all duration-100 hover:scale-105"
          >
            Ver Todos
          </Link>
        </div>
      </div>
    </>
  );
}
