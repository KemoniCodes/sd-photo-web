'use client'

import { getCollection } from '@/sanity/sanity.query';
import { CollectionType } from '@/types'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function ProjectCard({ collectionTitle, mainImage, hoverColor, _id, slug }: CollectionType) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
        {slug && (
        <Link key={_id} href={slug.current} passHref>
            <div
                className="projectCard w-full h-[55vh] relative"
                style={{ backgroundColor: `${hoverColor}` }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {mainImage && (
                    <Image alt={mainImage.alt} src={`${mainImage}`} width={455} height={471}
                        className={`object-cover w-full h-full transition-transform transform ${isHovered ? 'scale-[.92]' : 'scale-100'
                    }`}
                    />
                )}
                <h4 className='text-ghostWite absolute inset-0 flex items-center justify-center text-center'>{collectionTitle}</h4>
            </div>
            </Link>
        )}

        </>
    );
}

const projectsGrid = () => {
    //initialize the collection by setting the iniital state to be the collection type or before data fetches to be null
    const [collections, setCollections] = useState<CollectionType[] | null>(null);

    useEffect(() => {
        const fetchCollections = async () => {
            const data = await getCollection();
            setCollections(data);
        }
        fetchCollections();
    }, [])

    if (!collections) {
        return <p>Loading...</p>;
    }

    // console.log('COLLECTIONS', collections)
    //display all collections in a grid and on hover make image smaller and display hover color in the bg and also 
    return (
        <>
            <div className="projectsGrid grid grid-cols-3 gap-2">
                {collections.map((collection) => (
                    <ProjectCard key={collection._id} mainImage={collection.mainImage} hoverColor={collection.hoverColor} collectionTitle={collection.collectionTitle} slug={collection.slug} />
                ))}
            </div>
        </>
    )
}

export default projectsGrid