"use client"

import React, { useState, useEffect } from 'react';
import { getAboutInfo } from '@/sanity/sanity.query';
import { AboutType } from '@/types';
import Image from 'next/image';
import Arrow from '../../../public/arrow.svg';

function Profile({ profileImage, bio, email, featuredBrands }: AboutType) {
    return (
        <>
            <div className="profileImage w-[45%]">
                <Image src={`${profileImage}`} width={500} height={567} alt={profileImage?.alt} className='w-full object-cover h-[80vh] object-top' />
            </div>
            <div className="profileInfo w-[60%]">
                <p className='whitespace-pre-wrap text-justify'>{bio}</p>
                <p className='mt-14 flex cursor-pointer'><b>{email}</b><Image className='w-[1.4rem] ml-[.3rem]' width={10} height={10} src={Arrow} alt='arrow' /></p>
            </div>
        </>
    )
}

const About = () => {
    const [about, setAbout] = useState<AboutType[] | null>(null)

    useEffect(() => {
        const fetchAboutInfo = async () => {
            const data = await getAboutInfo();
            setAbout(data)
        }
        fetchAboutInfo();
    }, [])

    if (!about) {
        return <p>Loading...</p>;
    }

    console.log(about)

    return (
        <>
            <div className="profile flex gap-12">
                {about.map((profile) => (
                    <>
                        <Profile profileImage={profile.profileImage} bio={profile.bio} email={profile.email} featuredBrands={profile.featuredBrands} />
                    </>
                ))}
            </div>
        </>
    )
}

export default About;