import { type SchemaTypeDefinition } from "sanity";
import post from "./schema/post";
import tags from "./schema/tags";
import category from "./schema/category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tags, category],
};
