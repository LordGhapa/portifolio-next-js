import Link from "next/link";
import React from "react";

const menu = [
  {
    name: "Inicio",
    href: "/#inicio",
  },
  {
    name: "Habilidades",
    href: "/#habilidades",
  },
  {
    name: "Projetos",
    href: "/#projetos",
  },
  {
    name: "Sobre",
    href: "/#sobre",
  },
];

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 z-50 h-[65px] w-full bg-[#03001417] shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md ">
        <div className="container m-auto flex h-full w-full flex-row items-center justify-between px-10 ">
          <Link
            href="/#inicio"
            className="flex h-auto w-auto cursor-pointer flex-row items-center "
          >
            <p className="text-xl font-semibold tracking-wider text-white">
              Felipe Lacerda
            </p>
          </Link>
          <div className="flex justify-between  gap-4 rounded-full border border-[#7042f861] bg-[#0300145e] px-5 py-2">
            {menu.map((el, index) => (
              <React.Fragment key={index}>
                <Link
                  href={el.href}
                  className="flex h-auto w-auto cursor-pointer flex-row items-center "
                >
                  <p className="text-base font-semibold tracking-wider text-white">
                    {el.name}
                  </p>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
