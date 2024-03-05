'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { getCollectionBySlug } from '@/sanity/sanity.query';
import type { CollectionType } from '@/types';
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function Project({ collectionTitle, _id, slug, hoverColor, mainImage, images }: CollectionType) {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let containerWidth = document.documentElement.clientWidth;

    containerWidth = Math.max(containerWidth, 0);

    const animation = gsap.to(container, {
      x: () => -containerWidth,
      scrollTrigger: {
        trigger: '.scrollerWrapper',
        start: 'top top',
        end: () => `+=${containerWidth}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
        onLeaveBack: () => {
          ScrollTrigger.create({
            trigger: '.projectImagesContainer',
            start: 'bottom bottom',
            end: '+=100vh',
            onEnter: () => animation.progress(1),
          });
        },
      },
    });

    return () => {
      animation.kill();
    };
  }, []);


  return (
    <>
      <div className="project flex">
        <div className="projectName w-full lg:w-[30%] relative lg:fixed h-screen text-left">
          <h3 className='break-words w-[90vw] lg:w-auto'>{collectionTitle}</h3>
          <h3 className='absolute bottom-0 pb-20 cursor-pointer' onClick={handleBackClick}>back</h3>
        </div>

        <div className="projectImages projectImagesContainer absolute left-0 mt-40 lg:mt-0 lg:left-[35%] pb-32 ">

          {/* the div wrapping the image slider only */}
          <div className="scrollerContainer w-full overflow-scroll hidden lg:block"
          // style={{ height: 'calc(100vh + 210vw)' }}
          >
            <div className="scrollerWrapper overflow-scroll">
              <div className="imagesSlider w-full lg:flex hidden gap-2" ref={containerRef}
              // style={{ height: 'calc(100vh + 210vw)' }}
              >
                {mainImage && (
                  <Image
                    className='h-[90vh] w-[90%]'
                    src={`${mainImage}`}
                    height={900}
                    width={612}
                    alt={mainImage.alt}
                    priority={true}
                  />
                )}

                {images?.slice(0, 3).map((img, index) => (
                  <Image key={index} className='!h-[90vh] w-[90%]' src={`${img}`} height={900} width={612} alt={img.alt} priority={true} />
                ))}
              </div>
            </div>
          </div>
          <div className="otherImages flex flex-wrap gap-x-2 gap-y-4 lg:gap-y-32 justify-center mt-32">
          {mainImage && (
                  <Image
                    className='object-cover block lg:hidden' src={`${mainImage}`} height={600} width={394} alt={mainImage.alt} priority={true}
                  />
                )}
            {images?.map((img, index) => (
              <Image key={index} className='object-cover' src={`${img}`} height={600} width={394} alt={img.alt} priority={true} />
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

