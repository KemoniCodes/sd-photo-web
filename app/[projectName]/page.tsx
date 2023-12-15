'use client';

import { useEffect, useState } from 'react';
import { getCollectionBySlug } from '@/sanity/sanity.query';
import type { CollectionType } from '@/types';
import React from "react";
import { usePathname, useRouter } from 'next/navigation';

function Project({ collectionTitle, _id, slug, hoverColor, mainImage, images, }: CollectionType) {

  return (
    <>
      <h1>{collectionTitle}</h1>
    </>
  );
}

const ProjectPage = () => {
  const router = usePathname();
  const slug = router.replace(/^\/|\/$/g, '');

  const [collection, setCollection] = useState<CollectionType | null>(null);

  useEffect(() => {
    const fetchCollection = async () => {
      console.log('SLUG:' + slug)
      if (slug) {
        const data = await getCollectionBySlug(slug);
        setCollection(data);
      }
    };
    fetchCollection();
  }, [slug]);
  console.log('this', collection)

  if (!collection) {
    return <p>Loading...</p>;
  }

  return (
    console.log('COLLECTION', collection),
    <div>
      <Project _id={collection._id} slug={collection.slug} images={collection.images} mainImage={collection.mainImage} hoverColor={collection.hoverColor} collectionTitle={collection.collectionTitle} />
    </div>
  );
};

export default ProjectPage;

