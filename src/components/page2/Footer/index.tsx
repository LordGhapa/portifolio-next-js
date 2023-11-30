"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="flex  w-full justify-center border-t border-[#7042f861]">
        <div className="z-20 flex w-full max-w-7xl flex-col items-center justify-between gap-2 py-5 sm:flex-row sm:px-2">
          <p className="z-20 text-white">
            feito por Felipe Lacerda {currentYear}
          </p>
          <div className="flex gap-2">
            <Link
              href="https://github.com/LordGhapa"
              target="_blank"
              aria-label="github"
              className="transition-all duration-100 hover:scale-105"
            >
              <Image
                src="/githubicon.svg"
                alt="icone github"
                height={50}
                width={50}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/felipe-lacerda-oliveira/"
              target="_blank"
              aria-label="LinkedIn"
              className="transition-all duration-100 hover:scale-105"
            >
              <Image
                src="/linkedinIcon.svg"
                alt="icone LinkedIn"
                height={50}
                width={50}
              />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
