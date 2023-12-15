import React, { useState, useEffect } from 'react';
import client from '../../../sanity/sanity.client';
import Image from "next/image";
import { getCollection } from "@/sanity/sanity.query";
import type { CollectionType } from "@/types";
import { motion } from "framer-motion"
import Link from 'next/link';


const CollectionImages = () => {
  const [collections, setCollections] = useState<CollectionType[]>([]);
  const [hoverStates, setHoverStates] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    async function fetchData() {
      const data = await getCollection();
      const initialHoverStates: { [key: string]: boolean } = {};
      data.forEach((collec: { _id: string | number; }) => {
        initialHoverStates[collec._id] = false;
      });
      setHoverStates(initialHoverStates);
      try {
        const data = await getCollection();
        setCollections(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const handleMouseEnter = (_id: string) => {
    // Set the hover state to true for the specified image
    setHoverStates((prevHoverStates) => ({
      ...prevHoverStates,
      [_id]: true,
    }));
  };

  const handleMouseLeave = (_id: string) => {
    // Set the hover state to false for the specified image
    setHoverStates((prevHoverStates) => ({
      ...prevHoverStates,
      [_id]: false,
    }));
  };

  return (
    <div className="imagesGrid absolute top-0 grid-cols-3	grid gap-y-[27rem] w-[-webkit-fill-available]">
      {collections.map((collec) => (
        console.log('COLLECTION' + collec),
        <Link href={collec.slug.current} passHref>
        <div key={collec._id} className="hover:cursor-pointer relative"  >
          {
            hoverStates[collec._id] && (
              <motion.div
                style={{ backgroundColor: `${collec.hoverColor}` }}
                className="fixed left-0 !w-full h-full top-0 z-[1] "
                initial={{ opacity: 0.5, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
              />
            )
          }

          <Image
            alt={collec.mainImage.alt}
            src={`${collec.mainImage}`}
            width={311}
            height={400}
            onMouseEnter={() => handleMouseEnter(collec._id)}
            onMouseLeave={() => handleMouseLeave(collec._id)}
            priority={true}
            className={`transition-transform transform w-auto' ${hoverStates[collec._id] ? ' transition-imageHover absolute z-10 scale-125 ease-in duration-400' : ''
              }`}
          />
          {hoverStates[collec._id] && (
            <h2 className='z-10 text-ghostWite !w-auto fixed bottom-0 ml-[27px] left-0 text-left leading-[9rem]'>{collec.collectionTitle}</h2>
          )}

        </div>
        </Link>

      ))}
    </div>
  );
};

export default CollectionImages;