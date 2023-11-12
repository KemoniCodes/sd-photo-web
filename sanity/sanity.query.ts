import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getCollection() {
  return client.fetch(
    groq`*[_type == "collection"]{
      _id,
      collectionTitle,
      slug,
      hoverColor,
      "mainImage": mainImage.asset->url,
      "mainImageAlt": mainImage.alt,       
      "images": images[].asset->url, 
      "imageAlts": images[].alt
    }`
  );
}
