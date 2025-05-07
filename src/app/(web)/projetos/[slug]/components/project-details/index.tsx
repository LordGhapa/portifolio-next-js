import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import ButtonBackPage from "@/components/ButtonBackPage";
import { urlFor } from "../../../../../../../sanity/lib/image";


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

export default function ProjectDetails({ info }: ProjectDetailsProps) {
  return (
    <main className="z-20 mt-20 mb-10 flex min-h-screen flex-col items-center justify-center gap-8 px-2 md:flex-row md:items-start">
      <div className="textos z-20 flex w-full max-w-3xl flex-col gap-2 overflow-hidden rounded-2xl bg-slate-900/70">
        <div className="imagem relative flex min-h-[200px] w-full items-center justify-center bg-gradient-to-r from-purple-500 to-cyan-500 p-6">
          <ButtonBackPage
            className="absolute top-3 left-3 z-20 rounded-lg bg-slate-900 p-1"
            aria-label="voltar seção de projetos"
          >
            <Image
              src="/ArrowLeft.svg"
              alt="ArrowLeft"
              width={12}
              height={12}
              className="h-full w-full"
            />
          </ButtonBackPage>
        {info?.urlforimage &&  <Image
            src={urlFor(info.urlforimage).url()}
            alt={`Imagem do projeto`}
            width={400}
            height={255}
            className="rounded-lg"
          />}
        </div>
        <div className="tags mb-2 flex flex-wrap gap-2">
          {(info.tags || []).map((data, index) => (
            <div
              key={index}
              className="w-fit rounded-sm bg-gray-500 p-1 text-xs text-white capitalize"
            >
              {data.name}
            </div>
          ))}
        </div>
        <div className="texto mt-2 flex flex-col gap-1">
          <h1 className="text-center text-xl font-semibold text-white">
            {info.projectName}
          </h1>
          <div className="p-2 text-lg leading-relaxed text-white">
            <PortableText
              value={info.fullDescription}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="text-base leading-relaxed text-gray-200 mb-6 last:mb-0">
                      {children}
                    </p>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-xl font-semibold text-white mb-2">
                      {children}
                    </h2>
                  ),
                },
              }}
            />
          </div>
        </div>
      </div>

      <div className="links z-20 flex h-fit w-full max-w-sm flex-col items-center gap-6 rounded-2xl bg-slate-900/70 p-6">
        <h2 className="text-xl text-white">De uma olhada no projeto</h2>
        <div className="link-containers flex w-full flex-col gap-6">
          {info?.projectLink && (
            <Link
              href={info.projectLink}
              target="_blank"
              aria-label="link do projeto"
              className="flex items-center justify-between rounded-xl bg-purple-600 px-6 py-4 transition-all duration-100 hover:scale-105"
            >
              <Image alt="globo" src="/Globe.svg" height={24} width={24} />
              <p className="text-base text-white">Site</p>
              <Image
                alt="globo"
                src="/ArrowUpRight.svg"
                height={24}
                width={24}
              />
            </Link>
          )}
          {info?.githubLink && (
            <Link
              href={info.githubLink}
              target="_blank"
              aria-label="link do código"
              className="flex items-center justify-between rounded-xl bg-zinc-700 px-6 py-4 transition-all duration-100 hover:scale-105"
            >
              <Image
                alt="globo"
                src="/logo-github.svg"
                height={24}
                width={24}
              />
              <p className="text-base text-white">Código</p>
              <Image
                alt="globo"
                src="/ArrowUpRight.svg"
                height={24}
                width={24}
              />
            </Link>
          )}
          {info?.youtubeLink && (
            <Link
              href={info.youtubeLink}
              target="_blank"
              aria-label="link do vídeo"
              className="flex items-center justify-between rounded-xl bg-red-800 px-6 py-4 transition-all duration-100 hover:scale-105"
            >
              <Image
                alt="globo"
                src="/youtubeicon.svg"
                height={24}
                width={24}
              />
              <p className="text-base text-white">Vídeo</p>
              <Image
                alt="globo"
                src="/ArrowUpRight.svg"
                height={24}
                width={24}
              />
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
