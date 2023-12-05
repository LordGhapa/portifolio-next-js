import { AiFillCloseCircle } from "react-icons/ai";
import dynamic from "next/dynamic";
import Image from "next/image";

const HtmlComponent = dynamic(
  async () => await import("../HtmlComponent/index"),
  {
    ssr: false,
  },
);

interface ModalProps {
  title?: string;
  img: string;
  git?: string;
  youtube?: string;
  link: string;
  id: string;
  text: string;
  tags: string[];
}
const Modal = ({
  img,
  git,
  youtube,
  link,
  text,
  id,
  tags,
  title,
}: ModalProps) => {
  return (
    <div>
      {/* ModalTrigger */}

      <div className="modal max-w-xs  rounded-xl border-x-[15px] border-y-[10px]">
        <label
          htmlFor={id}
          className="cursor-pointer rounded bg-black py-4 text-white active:bg-slate-400"
        >
          <Image
            width={291}
            height={212}
            src={img}
            className="h-auto w-full"
            alt="img do projeto"
            loading="lazy"
          />
        </label>
      </div>

      {/* hidden toggle */}

      <input
        type="checkbox"
        name={id}
        id={id}
        className="peer fixed appearance-none opacity-0"
      />

      {/* Modal */}
      <label
        htmlFor={id}
        className="pointer-events-none invisible fixed inset-0 z-50 flex  cursor-pointer items-center justify-center overflow-hidden overscroll-contain bg-slate-700/30 opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100"
      >
        {/* box modal  */}
        <label className=" flex h-fit max-h-[calc(100vh-5em)] w-full max-w-xs scale-90 flex-col items-center  overflow-y-auto overscroll-contain rounded-md bg-white pb-3 pt-8 text-black shadow-2xl transition ">
          <label
            htmlFor={id}
            className="absolute right-3 top-2 cursor-pointer  text-[red]"
          >
            <AiFillCloseCircle size={24} />
          </label>
          <Image
            width={293}
            height={214}
            src={img}
            className="w-11/12 "
            alt="img do projeto"
          />
          <div className="mt-1 px-6">
            <h3 className="text-lg font-bold capitalize">{title}</h3>
            <div className="flex flex-wrap gap-1">
              {tags?.map((item, index) => (
                <div
                  key={index}
                  className="w-fit rounded bg-slate-900 p-1 text-xs capitalize text-white"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="py-2">
              <HtmlComponent text={text} />
            </p>
            <div className=" flex gap-2">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-black p-2 font-semibold text-blue-900 underline hover:text-red-700"
              >
                Projeto ↗
              </a>
              <a
                href={git}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-black p-2 font-semibold text-blue-900 underline hover:text-red-700"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </label>
      </label>
    </div>
  );
};

export default Modal;
