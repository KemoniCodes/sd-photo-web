import Hero from "./Hero";
import CollectionImages from "./collectionImages"

export default function Home() {
  return (
    <>
      <div className="home">
        <CollectionImages />
        <Hero />
      </div>
    </>
  );
}
