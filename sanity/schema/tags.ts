import { defineField } from "sanity";

export default {
  name: "projetos-tags",
  title: "Tags",
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
