import { ProjectsModel } from "@/models";
import { client } from "../../sanity/lib/client";
import * as queries from "./sanityQueries";
import { GetAllProjectsResult } from "../../sanity.types";

export async function getAllProjects(): Promise<GetAllProjectsResult> {
  const result = await client.fetch(
    queries.getAllProjects,
    {},
    { cache: "force-cache" },
    // { cache: "no-cache" },
  );

  return result;
}
