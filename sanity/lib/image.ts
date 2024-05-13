import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto("format").fit("max").url();
};

import { client } from "./client";
import ImageUrlBuilder from "@sanity/image-url";

export const urlFor = (source: any) => {
  return ImageUrlBuilder(client).image(source);
};
