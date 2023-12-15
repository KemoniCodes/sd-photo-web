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

export async function getCollectionBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "collection" && slug.current == $slug][0]{
      _id,
      collectionTitle,
      slug,
      hoverColor,
      "mainImage": mainImage.asset->url,
      "mainImageAlt": mainImage.alt,       
      "images": images[].asset->url, 
      "imageAlts": images[].alt
    }`,
    { slug }
  );
}
