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
      "slug": slug.current,
      hoverColor,
      "mainImage": mainImage.asset->url,
      "mainImageAlt": mainImage.alt,       
      "images": images[].asset->url, 
      "imageAlts": images[].alt
    }`,
    { slug }
  );
}

export async function getAboutInfo() {
  return client.fetch(
    groq`*[_type == "about"]{
      "profileImage": profileImage.asset->url,
      "profileImageAlt": profileImage.alt,
      bio,
      email,
      "featuredBrands": featuredBrands[].asset->url,
      "featuredBrandsAlts":featuredBrands[].alt
    }`
  );
}

export async function getHomepageVideo() {
  const result = await client.fetch(
    groq`*[_type == "homepage"]{
      "hpVideo": hpVideo.asset._ref
    }`
  );

  return result.length > 0 ? result[0] : {};
}

