const Hero = () => {
  return (
    <main>
      <section
        id="hero"
        className="flex max-h-screen min-h-[90vh] items-center bg-heromd bg-cover px-3 pt-16 text-white md:bg-hero"
      >
        <div className="mx-auto flex w-full max-w-[500px] flex-col items-center  lg:max-w-[1200px] lg:flex-row  lg:justify-between">
          <div className="mb-20 lg:max-w-[540px]">
            <h1 className=" text-4xl tracking-wider  md:text-5xl md:tracking-wide lg:text-left">
              Felipe Lacerda
            </h1>
            <p className=" mb-4 font-lato sm:text-lg  md:text-2xl md:tracking-wide lg:text-left">
              Desenvolvedor Front-end
            </p>
            <p className=" font-lato text-base sm:text-lg">
              A minha jornada no mundo do desenvolvimento web começou com o{" "}
              <span className=" font-bold">React</span> e o
              <span className="font-bold"> Next.js</span>, e desde então tenho
              trabalhado para aprimorar minhas habilidades e criar sites e
              aplicativos envolventes.
            </p>
            <div className="mt-2 flex gap-3">
              {/* <a
                target="_blank"
                href="#"
                className="cursor-pointer rounded-full bg-slate-900 p-3 transition-all duration-300 ease-in-out  hover:scale-110"
              >
                Curriculo CV
              </a> */}
              
              <a
                target="_blank"
                href="https://www.linkedin.com/in/felipe-lacerda-oliveira/"
                className="pointer rounded-full bg-slate-900 p-3 transition-all duration-300 ease-in-out hover:scale-110"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <img
            width={473}
            height={289}
            className="h-auto max-h-[289px] w-full max-w-[473px] "
            src="/pc.webp"
            alt="Sou uma imagem"
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;
