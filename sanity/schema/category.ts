import { defineField } from "sanity";

export default {
  name: "projetos-category",
  title: "Categorias",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) =>
        Rule.required().max(50).error("Maximum 50 Characters"),
    }),
  ],
};
