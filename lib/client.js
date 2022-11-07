import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "fa6ipcml",
  dataset: "production",
  apiVersion: "2022-11-04",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN_API,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
