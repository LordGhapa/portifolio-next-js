import { defineField } from "sanity";

export default {
  name: "projetos-blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "projectName",
      title: "Nome do projeto",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },

    defineField({
      name: "priority",
      title: "prioritario",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "category",
      title: "categorias",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "projetos-category" }],
        },
      ],
    }),
    defineField({
      name: "tags",
      title: "tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "projetos-tags" }],
        },
      ],
      validation: (Rule) => Rule.unique(),
    }),
    {
      name: "projectImage",
      title: "Imagem do projeto ",
      description: "deve ter esses tamanho 440x322",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          type: "text",
          name: "alt",
          title: "Texto alternativo",
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "fullDescription",
      title: "Descrição completa",
      type: "array",
      description: "Uma descrição completa do projeto",
      of: [
        {
          type: "block",
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "projectLink",
      title: "Link do projeto",
      type: "url",
      description: "Link para ver o projeto no ar",    
    },
    {
      name: "githubLink",
      title: "Link do GitHub",
      type: "url",
      description: "Link para o GitHub",
    },
    {
      name: "youtubeLink",
      title: "Link do Youtube",
      type: "url",
      description: "Link para o Youtube",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "projectName",
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
