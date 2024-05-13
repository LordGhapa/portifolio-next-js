import { Projects } from "@/models";
import { client } from "../../sanity/lib/client";
import * as queries from "./sanityQueries";

export async function getAllProjects() {
  const result = await client.fetch<Projects[]>(
    queries.getAllProjects,
    {},
    { cache: "force-cache" },
    // {next:{revalidate:1800} },
    //   { cache: "no-cache" }
  );

  return result;
}
