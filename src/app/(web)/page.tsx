import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/projects";
import Skills from "@/components/Skills";
import { getAllProjects } from "@/lib/apis";

export default async function Home() {
  const data = await getAllProjects();

  return (
    <>
      <main className="  z-20 h-full w-full">
        <div className="z-20 flex flex-col ">
          <Hero />
          <Skills />
          <Projects data={data} />
          <About />
        </div>
      </main>
    </>
  );
}
