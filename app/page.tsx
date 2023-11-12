"use client"

import { getCollection } from "@/sanity/sanity.query";
import type { CollectionType } from "@/types";
import Hero from "./components/Home/hero";
import Home from "./components/Home";
export default async function HomePage() {
  const collection: CollectionType[] = await getCollection();

  return (
    <>
      <Home />
    </>
    // <main className="max-w-7xl mx-auto lg:px-16 px-6">
    //   <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
    //     {/* {collection &&
    //       collection.map((data) => (
    //       <></>
    //       ))} */}
    //   </section>
    // </main>
  );
}