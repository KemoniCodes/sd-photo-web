import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getCollection() {
  return client.fetch(
    groq`*[_type == "collection"]{
        _id,
        collectionTitle,
        slug,
        hoverColor,
        mainImage{alt, "image": asset->_ref},
        images
      }`
  );
}
