// pages/[slug].tsx
// CollectionPage.tsx

// 'use client';

// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import { getCollectionBySlug } from '@/sanity/sanity.query';
// import type { CollectionType } from '@/types';

const CollectionPage = () => {
  // const router = useRouter();
  // const { slug } = router.query;
  // const [collection, setCollection] = useState<CollectionType | null>(null);

  // useEffect(() => {
  //   const fetchCollection = async () => {
  //     if (slug) {
  //       const data = await getCollectionBySlug(slug as string);
  //       setCollection(data);
  //     }
  //   };

  //   fetchCollection();
  // }, [slug]);

  // if (!collection) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      <h1>hello</h1>
      {/* <h1>{collection.collectionTitle}</h1> */}
      {/* Add other content related to the collection */}
    </div>
  );
};

export default CollectionPage;



// pages/[slug].tsx

// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import { getCollectionBySlug } from '@/sanity/sanity.query';
// import type { CollectionType } from '@/types';

// const CollectionPage = () => {
//   const router = useRouter();
//   const { slug } = router.query;
//   const [collection, setCollection] = useState<CollectionType | null>(null);

//   useEffect(() => {
//     const fetchCollection = async () => {
//       if (slug) {
//         const data = await getCollectionBySlug(slug as string);
//         setCollection(data);
//       }
//     };

//     fetchCollection();
//   }, [slug]);

//   if (!collection) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>{collection.collectionTitle}</h1>
//       {/* Add other content related to the collection */}
//     </div>
//   );
// };

// export default CollectionPage;
