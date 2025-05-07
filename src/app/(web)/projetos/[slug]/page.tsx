// import { data2 } from "@/data";
import { getAllProjects } from "@/lib/apis";
import Image from "next/image";
import Link from "next/link";

import { PortableText } from "@portabletext/react";

import ButtonBackPage from "@/components/ButtonBackPage";
import { urlFor } from "../../../../../sanity/lib/image";
import ProjectDetails from "./components/project-details";
import ProjectDetailsTest from "./components/project-details-test";

export async function generateStaticParams() {
  const data = await getAllProjects();
  const params = data.map((data) => ({
    slug: data.slug,
  }));
  
  return params;
}

interface ProjectProps {
  params: Promise<{ slug: string }>;
}

export default async function Project(props: ProjectProps) {
  const params = await props.params;

  const { slug } = params;

  const info = await getAllProjects().then(
    (r) => r.filter((data) => data.slug === slug)[0],
  );


  return (
    <>
     {/* <ProjectDetails info={info} /> */}
     <ProjectDetailsTest info={info} />
    </>
  );
}
