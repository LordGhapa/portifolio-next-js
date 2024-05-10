"use client";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/projects";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <>
      <main className="  z-20 h-full w-full">
        <div className="z-20 flex flex-col ">
          <Hero />
          <Skills />
          <Projects />
          <About />
        </div>
      </main>
    </>
  );
};

export default Home;
