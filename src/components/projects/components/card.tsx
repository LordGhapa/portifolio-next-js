"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { urlFor } from "../../../../sanity/lib/image";
import { PortableText, toPlainText } from "next-sanity";
import { GetAllProjectsResult } from "../../../../sanity.types";

interface ProjectCardProps {
  title: string;
  description?: string;
  image: string;
  technologies?: string[];
  slug: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  slug,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  console.log("description", description);

  return (
    <Link href={`/projetos/${slug}`} className="block h-full">
      <motion.div
        className="group relative h-full overflow-hidden rounded-lg border border-purple-500/20 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
        whileHover={{ y: -8 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Overlay de gradiente que aparece no hover */}
        {/* <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-500/30 z-10  transition-opacity duration-300"
          // animate={{ opacity: isHovered ? 1 : 0 }}
        /> */}
        <motion.div
          // className="absolute inset-0 bg-black/60   z-10 opacity-0 transition-opacity duration-300"
          className="absolute inset-0 z-10 bg-black/20 opacity-0 transition-opacity duration-300"
          animate={{ opacity: isHovered ? 1 : 0 }}
        />

        {/* Ícone de seta que aparece no hover */}
        <motion.div
          className="absolute top-4 right-4 z-20 rounded-full bg-white/10 p-2 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
            rotate: isHovered ? 0 : -45,
          }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUpRight className="text-white" size={16} />
        </motion.div>

        <div className="relative h-52 overflow-hidden">
          <Image
            src={urlFor(image).url() || "/globe.svg"}
            alt={title}
            width={500}
            height={300}
            className="aspect-[500/300] h-full w-[400px] object-cover transition-transform duration-700 ease-in-out"
            style={{
              transform: isHovered ? "scale(1.08)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

          {/* Título sobreposto na imagem */}
          <div className="absolute right-0 bottom-0 left-0 z-10 p-4 pt-0 pb-1 backdrop-blur-xs">
            <h3 className="mb-1 text-xl font-bold text-white">{title}</h3>
            <p className="line-clamp-2 text-sm text-gray-300">{description}</p>
          </div>
        </div>

        <div className="relative z-20 p-4">
          <div className="flex flex-wrap gap-2">
            {technologies &&
              technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-purple-900/50 px-2 py-1 text-xs text-purple-200"
                >
                  {tech}
                </span>
              ))}
          </div>

          <motion.div
            className="mt-4 flex items-center text-sm font-medium text-purple-300"
            animate={{
              x: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            Ver detalhes do projeto
            <ArrowUpRight className="ml-1" size={14} />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
