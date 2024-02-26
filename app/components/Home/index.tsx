import Hero from "./Hero";
import CollectionImages from "./collectionImages"

export default function Home() {
  return (
    <>
      <div className="home h-screen opacity-0 transition-opacity">
        <CollectionImages />
        <Hero />
      </div>
    </>
  );
}
