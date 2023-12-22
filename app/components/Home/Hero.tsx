import React, { useEffect, useState } from "react"
import { getHomepageVideo } from "@/sanity/sanity.query"
import { HomeType } from "@/types"


export default function Hero() {
  const [hpVideo, sethpVideo] = useState<HomeType | null>(null)
  useEffect(() => {
    async function fetchData() {
      const data = await getHomepageVideo();
      sethpVideo(data);
    }
    fetchData();
    console.log(hpVideo)

    const videoElement = document.getElementById("autoplayVideo") as HTMLVideoElement | null;
    if (videoElement) {
      videoElement.play().catch((error) => {
        console.error("Autoplay was prevented:", error);
      });
    }
  }, [hpVideo])

  if (!hpVideo) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <style jsx global>{`
        body {
          // margin: 0;
          // margin-top: 1.5rem;
          // margin-left: 1rem;
          padding: 0;
          overflow: hidden;
        }
      `}</style>
      <div className="-m-[1.5rem] lg:hidden block">
        <video
          className=" h-[102vh] object-cover"
          preload="auto"
          width="100%"
          height="100vh"
          playsInline
          // autoPlay
          id="autoplayVideo"
          // muted
        >
          <source src={"https://cdn.sanity.io/files/00nf1c6w/production/c919d040b2c36174b861f243d5d49a8865b61246.mp4"} type="video/mp4" />
        </video>
      </div>

      <div className="nameDiv absolute lg:bottom-0 -bottom-[.7rem] lg:pl-0 pl-[.7rem]">
        <h1 className="lg:-ml-2 -ml-[.8rem]">sam</h1>
        <h1 className="-ml-4">dameshek</h1>
      </div>

    </>
  )
};