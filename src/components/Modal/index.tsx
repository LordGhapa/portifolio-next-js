// import HtmlComponent from "../HtmlComponent/index";
import dynamic from "next/dynamic";

const HtmlComponent = dynamic(
  async () => await import("../HtmlComponent/index"),
  {
    ssr: false,
  },
);

interface ModalProps {
  img: string;
  git?: string;
  youtube?: string;
  link: string;
  id: string;
  text: string;
}
const Modal = ({ img, git, youtube, link, text, id }: ModalProps) => {
  return (
    <div className="">
      {/* ModalTrigger */}

      <div>
        <label
          htmlFor={id}
          className="cursor-pointer rounded bg-black py-4 text-white active:bg-slate-400"
        >
          <img
            width={291}
            height={212}
            src={img}
            className="h-auto w-full"
            alt="img do projeto"
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
        className="pointer-events-none invisible fixed inset-0 flex cursor-pointer items-center justify-center overflow-hidden overscroll-contain bg-slate-700/30 opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100"
      >
        {/* box modal */}
        <label className="h-fit max-h-[calc(100vh-5em)] w-80 max-w-lg scale-90 overflow-y-auto overscroll-contain rounded-md bg-white p-6 text-black  shadow-2xl transition">
          <label htmlFor={id} className="absolute right-3 top-2 cursor-pointer">
            x
          </label>
          <h3 className="text-lg font-bold">ola</h3>
          <p className="py-4">
            <HtmlComponent text={text} />
          </p>
        </label>
      </label>
    </div>
  );
};

export default Modal;
