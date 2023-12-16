'use client';

import React from "react";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCollectionBySlug } from '@/sanity/sanity.query';
import type { CollectionType } from '@/types';
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Project({ collectionTitle, _id, slug, hoverColor, mainImage, images, }: CollectionType) {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <>
      <div className="project flex">
        <div className="projectName w-[30%] fixed h-screen text-left">
          <h3 className='break-words'>{collectionTitle}</h3>
          <h3 className='absolute bottom-0 pb-20 cursor-pointer' onClick={handleBackClick}>back</h3>
        </div>
        <div className="projectImages absolute left-[35%] pb-32">
          <div className="imagesSlider flex gap-2 overflow-scroll">
            <Image className='h-[90vh] w-[90%]' src={`${mainImage}`}
              height={900} width={612} alt={mainImage.alt} priority={true} />
            {images.slice(0, 3).map((img, index) => (
              <Image className='!h-[90vh] w-[90%]' src={`${img}`} height={900} width={612} alt={img.alt} priority={true} />
            ))}
          </div>
          <div className="otherImages flex flex-wrap gap-x-2 gap-y-32 justify-center mt-32">
            {images.slice(3).map((img, index) => (
              <Image className='' src={`${img}`} height={600} width={394} alt={img.alt} priority={true} />
            ))}          
          </div>
        </div>
      </div>
    </>
  );
}

const ProjectPage = () => {
  const router = usePathname();
  var slug = router.replace(/^\/|\/$/g, '');

  const [collection, setCollection] = useState<CollectionType | null>(null);

  useEffect(() => {
    const fetchCollection = async () => {
      console.log('SLUG:' + slug)
      if (slug) {
        const data = await getCollectionBySlug(slug);
        // if (data.collectionTitle.length > 7 && !data.collectionTitle.includes('/')) {
        //   data.collectionTitle = `${data.collectionTitle.slice(0, 7)}/${data.collectionTitle.slice(7)}`;
        // }
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
    <div className='project-container mt-12'>
      <Project _id={collection._id} slug={collection.slug} images={collection.images} mainImage={collection.mainImage} hoverColor={collection.hoverColor} collectionTitle={collection.collectionTitle} />
    </div>
  );
};

export default ProjectPage;

