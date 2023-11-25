import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-3 py-20 text-white">
      <div className="mx-auto flex max-w-[500px] flex-col   justify-center md:max-w-3xl md:flex-row md:items-center md:justify-between lg:max-w-[1200px]">
        <div id="objetivos" className="flex max-w-[500px] flex-col gap-4">
          <h2 className=" text-4xl font-bold"> Objetivos Futuros</h2>
          <p className="font-lato text-lg">
            Meu entusiasmo pelo desenvolvimento web me leva a buscar
            conhecimentos mais profundos. No futuro, pretendo expandir minhas
            habilidades para o desenvolvimento de back-end, especialmente com
            Node.js. Estou ansioso para aprender mais sobre como criar e dar
            vida a projetos ainda mais ambiciosos.
          </p>
        </div>
        <div id="contatos" className="flex flex-col gap-4 self-start">
          <h2 className=" mb-5 text-4xl font-bold">Contato</h2>

          <div className="flex gap-3">
            <a
              aria-label="LinkedIn"
              target="_blank"
              href="https://www.linkedin.com/in/felipe-lacerda-oliveira/"
              className="flex h-[50px] w-[50px] cursor-pointer
            items-center justify-center rounded-full  border-2 bg-slate-900 transition-all duration-300 ease-in-out hover:scale-110"
              rel="noreferrer"
            >
              <FaLinkedinIn size={30} />
            </a>

            <a
              aria-label="Contato whatsApp"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5562982069427"
              className="cursor-pointer rounded-full bg-slate-900 transition-all duration-300 ease-in-out hover:scale-110"
              rel="noreferrer"
            >
              <AiOutlineWhatsApp className="rounded-full" size={50} />
            </a>

            <a
              aria-label="github"
              target="_blank"
              href="https://github.com/LordGhapa"
              className="cursor-pointer rounded-full bg-slate-900 transition-all duration-300 ease-in-out hover:scale-110"
              rel="noreferrer"
            >
              <AiFillGithub size={50} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
