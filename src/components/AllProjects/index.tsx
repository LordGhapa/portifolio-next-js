// "use client";

import { ProjectsModel } from "@/models";
import ProjectCard from "../projects/ProjectCard";
import React from "react";
interface AllProjectsProps {
  data: ProjectsModel[];
}

export default function AllProjects({ data }: AllProjectsProps) {
  const categories = [
    ...new Set(data.flatMap((item) => item?.category?.map((r) => r?.name))),
  ];

  function filterProjectsByCategory(categoryName: string): ProjectsModel[] {
    return data.filter((project) =>
      project.category.some((tag) => tag.name === categoryName),
    );
  }

  return (
    <div className="z-20 py-20 ">
      {categories.map((category: string) => {
        const filteredProjects = filterProjectsByCategory(category);
        const items = filteredProjects.map((data) => (
          <React.Fragment key={data.projectName}>
            {
              <ProjectCard
                src={data.urlforimage}
                title={data.projectName}
                link={data.slug}
              />
            }
          </React.Fragment>
        ));
        return (
          <div key={category}>
            <h2 className="bg-clip-text pb-4 pt-7 text-center  text-5xl font-semibold text-white ">
              {category}
            </h2>
            <div className="cardsComponent  mx-auto flex h-full	w-full max-w-[1536px] flex-col flex-wrap items-center   gap-10 px-2  lg:flex-row">
              {items}
            </div>
          </div>
        );
      })}
    </div>
  );
}
