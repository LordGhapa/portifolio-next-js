import { groq } from "next-sanity";

export const getAllProjects = groq`*[_type == "projetos-blogPost"]| order(_createdAt asc)  {
"urlforimage":projectImage.asset._ref,
  githubLink,
  youtubeLink,
  projectLink,
  projectName,
  "slug":slug.current,
  tags[]->{
    name
  },
  category[]->{
    name
  },
  fullDescription
}
`;
