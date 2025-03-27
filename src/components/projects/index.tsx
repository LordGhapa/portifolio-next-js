"use client";

import React from "react";
import { useStateContext } from "@/app/(web)/providers/provider";

import Link from "next/link";
import { GetAllProjectsResult } from "../../../sanity.types";
import ProjectCard from "./components/card";

interface ProjectsProps {
  data: GetAllProjectsResult;
}

export default function Projects({ data }: ProjectsProps) {
  const { refCallback }: any = useStateContext();

  return (
    <>
      <div
        id="projetos"
        className="z-20 flex flex-col items-center justify-center py-20"
        ref={refCallback}
      >
        <h2 className="bg-linear-to-r from-purple-500 to-cyan-500 bg-clip-text pb-20 text-5xl font-semibold text-clip text-transparent">
          Projetos
        </h2>
        <div className="cardsComponent flex h-full w-full max-w-[1536px] flex-col flex-wrap items-center justify-center gap-10 px-2 lg:flex-row">
          {data.map((card, index) => (
            <ProjectCard
              image={card.urlforimage ?? "/globe.svg"}
              title={card.projectName}
              slug={card.slug}
              description={card.shortDescription}
              technologies={card?.tags?.map((tag) => tag.name)}
              key={index}
            />
          ))}
          {/* <Link
            href="/projetos"
            className="button-primary w-full max-w-[200px] cursor-pointer rounded-lg py-2 text-center text-white transition-all duration-100 hover:scale-105"
          >
            Ver Todos
          </Link> */}
        </div>
      </div>
    </>
  );
}
