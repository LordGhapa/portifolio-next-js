import ProjectCard from "./ProjectCard";
import { data } from "../../../data";
import React from "react";
export default function Projects() {
  return (
    <>
      <div
        id="projetos"
        className="z-20 flex flex-col items-center justify-center py-20"
      >
        <h2 className="text-clip bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text pb-20 text-5xl font-semibold text-transparent">
          Projetos
        </h2>
        <div className="cardsComponent flex h-full w-full flex-col flex-wrap items-center justify-center gap-10 lg:flex-row ">
          {data.map((card, index) => (
            <React.Fragment key={index}>
              <ProjectCard
                src={card.img}
                title={card.title}
                desc="sou uma descrição"
                link={card.link}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
