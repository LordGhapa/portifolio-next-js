import ProjectCard from "./ProjectCard";
import { data2 } from "../../../data";
import React from "react";
import { useStateContext } from "@/app/providers/provider";
export default function Projects() {
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
          {data2.map((card, index) => (
            <React.Fragment key={index}>
              <ProjectCard
                src={card.img}
                title={card.title}
                // desc={card?.resume ?? "no Resume"}
                link={card.id}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
