import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  src: string;
  title: string;
  desc: string;
  link: string;
}

export default function ProjectCard({
  src,
  title,
  desc,
  link,
}: ProjectCardProps) {
  return (
    <div className="relative w-full overflow-hidden  rounded-lg border border-[#2A0E61] shadow-lg lg:w-[30%]">
      <Link href={link}>
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{desc}</p>
        </div>
      </Link>
    </div>
  );
}
