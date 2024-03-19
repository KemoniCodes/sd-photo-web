import React, { useState, useEffect } from 'react';
import client from '../../../sanity/sanity.client';
import Image from "next/image";
import { getCollection } from "@/sanity/sanity.query";
import type { CollectionType } from "@/types";
import { Variants, motion } from "framer-motion"
import Link from 'next/link';
import LoadingScreen from './loadingScreen';


const CollectionImages = () => {
  const [collections, setCollections] = useState<CollectionType[]>([]);
  const [hoverStates, setHoverStates] = useState<{ [key: string]: boolean }>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCollection();
        setCollections(data);
        setIsLoading(false); // Set loading state to false after fetching data
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Handle loading state in case of an error
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <LoadingScreen />; // Render LoadingScreen component while fetching data
  }

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

  const scrollVariants: Variants = {
    offscreen: {
      y: 200,
      opacity: 0
    },
    onscreen: {
      y: 50,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div className="imagesGrid absolute top-0 grid-cols-3	lg:grid hidden gap-y-[27rem] w-[-webkit-fill-available] pb-48 ">
      {collections.map((collec) => (
        console.log('COLLECTION' + collec),

        <Link key={collec._id} href={collec.slug.current} passHref
        >
          <motion.div key={collec._id} className="hover:cursor-pointer relative"
            // initial="offscreen"
            // whileInView="onscreen"
            onMouseEnter={() => handleMouseEnter(collec._id)}
            onMouseLeave={() => handleMouseLeave(collec._id)}
            // viewport={{ once: true, amount: 0.8 }}
            // variants={scrollVariants}
          >
            {
              hoverStates[collec._id] && (
                <motion.div
                  style={{ backgroundColor: `${collec.hoverColor}` }}
                  className="!fixed !left-0 !w-screen h-screen !top-0 !z-[1] "
                  initial={{ opacity: 0.5, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.1, ease: "easeInOut" }}

                />
              )
            }

            {collec.mainImage && (
              <Image
                alt={collec.mainImage.alt}
                src={`${collec.mainImage}`}
                width={311}
                height={400}
                onMouseEnter={() => handleMouseEnter(collec._id)}
                onMouseLeave={() => handleMouseLeave(collec._id)}
                priority={true}
                className={`transition-transform transform w-auto' ${hoverStates[collec._id] ? ' transition-imageHover sticky z-10 scale-125 ease-in duration-400' : ''
                  }`}

              />
            )}

            {hoverStates[collec._id] && (
              <h2 className='z-10 text-ghostWite !w-auto fixed bottom-0 ml-[27px] left-0 text-left leading-[9rem]'>{collec.collectionTitle}</h2>
            )}

          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default CollectionImages;