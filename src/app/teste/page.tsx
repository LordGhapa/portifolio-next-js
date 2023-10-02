export default function teste() {
  return (
    <main className="  flex flex-col bg-center text-white ">
      <section className="hero flex h-screen items-center justify-center bg-hero  bg-cover bg-no-repeat px-3 pt-10  md:max-h-[700px]">
        <div
          id="wrapper"
          className="md:align-center flex h-full  w-full  max-w-[1200px] flex-col justify-center gap-10 md:items-center lg:flex-row lg:justify-between"
        >
          <div className="flex max-w-[520px] flex-col">
            <p className="font-lato md:text-2xl md:tracking-wide">
              Transformando ideias em experiências digitas
            </p>
            <p className="mb-4 font-lato text-2xl tracking-wider md:text-5xl md:tracking-wide">
              Desenvolvedor Front-end
            </p>
            <p className="font-lato">
              Olá, eu sou Felipe Lacerda, a minha jornada no mundo do
              desenvolvimento web começou com o React e o Next.js, e desde então
              tenho trabalhado para aprimorar minhas habilidades e criar sites e
              aplicativos envolventes.
            </p>
          </div>

          <img
            className="max-h-[289px] w-full max-w-[473px] "
            src="/pc.png"
            alt="Sou uma imagem"
          />
        </div>
      </section>
    </main>
  );
}
