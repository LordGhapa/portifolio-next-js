import About from "@/components/page2/About";
import Hero from "@/components/page2/Hero";
import Projects from "@/components/page2/projects";
import Skills from "@/components/page2/Skills";

const Home = () => {
  return (
    <>
      <main className="  h-full w-full pt-10">
        <div className="flex flex-col ">
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
