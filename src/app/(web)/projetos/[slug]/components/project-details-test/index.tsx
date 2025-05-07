"use client";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import ButtonBackPage from "@/components/ButtonBackPage";
import { urlFor } from "../../../../../../../sanity/lib/image";
import { motion } from "framer-motion"

import {  Globe } from "lucide-react";
import BackButton from "../backButton";
import ActionButton from "../actionButton";
import {  RiGithubLine, RiYoutubeFill } from "react-icons/ri";
import TechnologyTag from "../technologyTag";

interface ProjectDetailsProps {
  info: {
    projectName: string;
    urlforimage: string | null;
    tags: { name: string }[] | null; 
    fullDescription: any;
    projectLink?: string | null;
    githubLink?: string | null;
    youtubeLink?: string | null;
  };
}

export default function ProjectDetailsTest({ info }: ProjectDetailsProps) {

  return (
  <main className="z-20 mt-20 mb-10 flex min-h-screen flex-col items-center justify-center gap-8 px-2 md:flex-row md:items-start">

       <BackButton/>

        <div className="container z-20 mx-auto px-4">
         {/*   <motion.div
          className="relative  h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Image   src={urlFor(info.urlforimage).url()}  alt={`Imagem do projeto`} fill className="object-cover" />

          <Image   src={urlFor(info.urlforimage).url()}  alt={`Imagem do projeto`} fill className="object-contain" />

           {info?.urlforimage &&  <Image
                      src={urlFor(info.urlforimage).url()}
                      alt={`Imagem do projeto`}
                      width={400}
                      height={255}
                      className="rounded-lg z-10"
                    />}
          <div className="absolute z-0 inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-100" />
        </motion.div> */}
              <motion.div className="imagem relative flex min-h-[200px] w-full items-center justify-center bg-gradient-to-r from-purple-500 to-cyan-500 p-6 mb-4"
               initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}>
                  
                {info?.urlforimage &&  <Image
                    src={urlFor(info.urlforimage).url()}
                    alt={`Imagem do projeto`}
                    width={400}
                    height={255}
                    className="rounded-lg"
                  />}
                </motion.div>
      

  <div className="grid w-full gap-8 lg:grid-cols-[2fr_1fr]">
              <motion.div
            className="space-y-4 md:space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* tags */}
            <div className="flex flex-wrap gap-2">
              {info.tags?.length && (info.tags.map(tech => (
                <TechnologyTag key={tech.name}>{tech.name}</TechnologyTag>
              )))}
            </div>
    

   
            <h1 className="text-xl  md:text-4xl font-bold text-white">
              {info.projectName}
            </h1>

           <PortableText
              value={info.fullDescription}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="text-base leading-relaxed text-gray-200 mb-4 md:mb-6 last:mb-0">
                      {children}
                    </p>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-[18px] md:text-xl font-semibold text-white mb-2">
                      {children}
                    </h2>
                  ),
                },
              }}
            />
          </motion.div>
           <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold text-white mb-4">
              De uma olhada no projeto
            </h2>

        {info?.projectLink && (    <ActionButton
              href={info?.projectLink}
              icon={<Globe size={24} />}
              variant="primary"
            >
              Visitar Site
            </ActionButton>)}

         {info?.githubLink && ( <ActionButton
              href={info?.githubLink}
              icon={<RiGithubLine size={24} />}         
              variant="secondary"
            >
              Ver Código no GitHub
            </ActionButton>)}

            {info?.youtubeLink && (
              <ActionButton
                href={info?.youtubeLink}
                icon={<RiYoutubeFill size={24} />}
                variant="secondary"
              >
                Assistir Demo no YouTube
              </ActionButton>
            )}
          </motion.div>
         </div>  </div>
  </main> 
  );
}
