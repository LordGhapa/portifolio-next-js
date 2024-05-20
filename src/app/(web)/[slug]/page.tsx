// import { data2 } from "@/data";
import { getAllProjects } from "@/lib/apis";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";

import ButtonBackPage from "@/components/ButtonBackPage";

export async function generateStaticParams() {
  const data = await getAllProjects();
  const params = data.map((data) => ({
    slug: data.slug,
  }));
  // console.log(params);
  return params;
}

interface ProjectProps {
  params: { slug: string };
}

export default async function Project({ params: { slug } }: ProjectProps) {
  const info = await getAllProjects().then(
    (r) => r.filter((data) => data.slug === slug)[0],
  );
  // const info = data2.filter((data) => data.id === slug)[0];
  // console.log(info);

  return (
    <main className="z-20  mb-10 mt-20 flex min-h-screen flex-col items-center justify-center gap-8 px-2 md:flex-row md:items-start">
      <div className="textos z-20 flex w-full max-w-3xl flex-col gap-2 overflow-hidden  rounded-2xl   bg-slate-900/70">
        <div className="imagem  relative flex min-h-[200px] w-full items-center justify-center bg-gradient-to-r from-purple-500 to-cyan-500 p-6">
          <ButtonBackPage
            className="absolute left-3 top-3 z-20  rounded-lg bg-slate-900 p-1"
            aria-label="voltar seção de projetos"
          >
            <Image
              src="/ArrowLeft.svg"
              alt="ArrowLeft"
              width={12}
              height={12}
              className=" h-full w-full "
            />
          </ButtonBackPage>
          <Image
            src={urlFor(info.urlforimage).url()}
            alt={`imagen do projeto`}
            width={400}
            height={255}
            className="rounded-lg"
          />
        </div>
        <div className="tags mb-2 flex flex-wrap gap-2">
          {info.tags.map((data, index) => (
            <div
              key={index}
              className="w-fit rounded bg-gray-500 p-1 text-xs capitalize text-white"
            >
              {data.name}
            </div>
          ))}
        </div>
        <div className="texto mt-2 flex flex-col gap-1">
          <h1 className="text-center text-xl font-semibold   text-white">
            {info.projectName}
          </h1>

          <div className=" p-2 text-lg leading-relaxed text-white">
            <PortableText value={info.fullDescription} components={{}} />
          </div>
        </div>
      </div>

      <div className=" links z-20 flex h-fit w-full max-w-sm flex-col items-center  gap-6 rounded-2xl bg-slate-900/70 p-6">
        <h2 className="text-xl text-white">De uma olhada no projeto</h2>
        <div className="link-containers flex w-full flex-col gap-6">
          {info.projectLink && (
            <Link
              href={info.projectLink}
              target="_blank"
              aria-label="link do projeto"
              className="flex items-center justify-between  rounded-xl bg-purple-600 px-6 py-4 transition-all duration-100 hover:scale-105"
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

          {info.githubLink && (
            <Link
              href={info.githubLink}
              target="_blank"
              aria-label="link do codigo"
              className="flex items-center justify-between  rounded-xl bg-zinc-700 px-6 py-4 transition-all duration-100 hover:scale-105"
            >
              <Image
                alt="globo"
                src="/logo-github.svg"
                height={24}
                width={24}
              />
              <p className="text-base text-white">Codigo</p>
              <Image
                alt="globo"
                src="/ArrowUpRight.svg"
                height={24}
                width={24}
              />
            </Link>
          )}
          {info.youtubeLink && (
            <Link
              href={info.youtubeLink}
              target="_blank"
              aria-label="link do codigo"
              className="flex items-center justify-between  rounded-xl bg-red-800 px-6 py-4 transition-all duration-100 hover:scale-105"
            >
              <Image
                alt="globo"
                src="/youtubeicon.svg"
                height={24}
                width={24}
              />
              <p className="text-base text-white">Video</p>
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
