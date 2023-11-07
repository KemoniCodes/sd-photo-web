import { getCollection } from "@/sanity/sanity.query";
import type { CollectionType } from "@/types";
import Hero from './components/Home/Hero';


export default async function Home() {
  const collection: CollectionType[] = await getCollection();

  return (
    <>
      <Hero />
    </>
  );
}