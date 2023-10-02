const Hero = () => {
  return (
    <main>
      <section
        id="hero"
        className="h-full bg-heromd bg-cover px-3 py-20 text-white md:bg-hero"
      >
        <div
          id="wrapper"
          className="mx-auto flex w-full max-w-[500px] flex-col items-center md:max-w-3xl lg:max-w-[1200px] lg:flex-row lg:justify-between "
        >
          <div className="lg:max-w-[550px]">
            <p className=" font-lato sm:text-lg md:text-center md:text-2xl md:tracking-wide lg:text-left">
              Transformando ideias em experiências digitas
            </p>
            <p className=" mb-4 font-lato text-2xl tracking-wider sm:text-4xl md:text-center md:text-5xl md:tracking-wide lg:text-left">
              Desenvolvedor Front-end
            </p>
            <p className="mb-5 font-lato sm:text-lg lg:text-base">
              Olá, eu sou Felipe Lacerda, a minha jornada no mundo do
              desenvolvimento web começou com o React e o Next.js, e desde então
              tenho trabalhado para aprimorar minhas habilidades e criar sites e
              aplicativos envolventes.
            </p>
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
