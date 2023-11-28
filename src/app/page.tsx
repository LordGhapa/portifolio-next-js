import Hero from "@/components/page2/main/Hero";
import Projects from "@/components/page2/main/Projects";
import Skills from "@/components/page2/main/Skills";

const Home = () => {
  return (
    <>
      <main className="  h-full w-full pt-10">
        <div className="flex flex-col ">
          <Hero />
          <Skills />
          <Projects />
        </div>
      </main>
    </>
  );
};

export default Home;
