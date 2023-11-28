import ProjectCard from "../sub/ProjectCard";

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
        <div className="flex h-full w-full flex-col flex-wrap items-center justify-center gap-10 lg:flex-row ">
          <ProjectCard
            src="/assets/CardImage.png"
            title="sou um titulo"
            desc="sou uma descrição"
            link="/"
          />
          <ProjectCard
            src="/assets/CardImage.png"
            title="sou um titulo"
            desc="sou uma descrição"
            link="/"
          />
          <ProjectCard
            desc="sou uma descrição"
            src="/assets/CardImage.png"
            title="sou um titulo"
            link="/"
          />
          <ProjectCard
            src="/assets/CardImage.png"
            title="sou um titulo"
            desc="sou uma descrição"
            link="/"
          />
          <ProjectCard
            src="/assets/CardImage.png"
            title="sou um titulo"
            desc="sou uma descrição"
            link="/"
          />
          <ProjectCard
            desc="sou uma descrição"
            src="/assets/CardImage.png"
            title="sou um titulo"
            link="/"
          />
        </div>
      </div>
    </>
  );
}
