"use client"

import { getCollection } from "@/sanity/sanity.query";
import type { CollectionType } from "@/types";
import Home from "./components/Home";
export default async function HomePage() {
  const collection: CollectionType[] = await getCollection();

  return (
    <>
      <Home />
    </>
  );
}