import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../../../sanity/lib/image";

interface ProjectCardProps {
  src: string;
  title: string;
  desc?: string;
  link: string;
}

export default function ProjectCard({
  src,
  title,
  desc,
  link,
}: ProjectCardProps) {
  return (
    <div className="card relative  w-full overflow-hidden rounded-lg border border-[#2A0E61] bg-gray-950/50 shadow-lg transition-all duration-300 ease-in-out hover:border-[#7042f88b] lg:min-h-[330px] lg:w-[30%] ">
      <Link href={link}>
        <Image
          src={urlFor(src).url()}
          alt={`imagem do projeto ${title}`}
          width={460}
          height={288}
          className="w-full object-contain xl:min-h-[320px] "
        />

        <div className="relative p-4 ">
          <h1 className="text-2xl font-semibold text-white ">{title}</h1>
        </div>
      </Link>
    </div>
  );
}
