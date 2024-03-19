import React, { useEffect, useState } from "react";
import { getHomepageVideo } from "@/sanity/sanity.query";
import { HomeType } from "@/types";
import { motion } from "framer-motion"
import { gsap } from "gsap";
import LoadingScreen from "./loadingScreen";


export default function Hero() {
  const [hpVideo, setHpVideo] = useState<HomeType | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getHomepageVideo();
        setHpVideo(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();

    const videoElement = document.getElementById("autoplayVideo") as HTMLVideoElement | null;
    if (videoElement) {
      videoElement.play().catch((error) => {
        console.error("Autoplay was prevented:", error);
      });
    }

    // const split = new SplitText(".line", { type: "chars" });
    // gsap.from(split.chars, {
    //   duration: 1,
    //   y: 100,
    //   autoAlpha: 0,
    //   stagger: .035
    // });


    // gsap.utils.toArray(".line").forEach((element) => {
    //   const split = new SplitText(element as HTMLElement, { type: "chars" });
    //   gsap.from(split.chars, {
    //     duration: 1,
    //     y: 100,
    //     autoAlpha: 0,
    //     stagger: 0.035,
    //     ease: "power4.out",
    //   });
    // });

  }, []);

  useEffect(()=> {
    gsap.to(".line", { y: 200 })

  }, [])


  if (!hpVideo) {
    return <LoadingScreen />;
  }

  return (
    <>
      <style jsx>{`
        body {
          padding: 0;
          overflow-y: hidden;
        }
      `}</style>
      <div className="-m-[1.5rem] lg:hidden block">
        <video
          className="h-[110vh] object-cover"
          preload="auto"
          width="100%"
          height="100vh"
          playsInline
          autoPlay
          id="autoplayVideo"
          muted
        >
          <source src={"https://cdn.sanity.io/files/00nf1c6w/production/c919d040b2c36174b861f243d5d49a8865b61246.mp4"} type="video/mp4" />
        </video>
      </div>

      <div className="nameDiv absolute lg:bottom-0 -bottom-[.7rem] lg:pl-0 pl-[.7rem]">
        <h1 className="line overflow-hidden lg:-ml-2 -ml-[.8rem]">sam</h1>
        <h1 className="line overflow-hidden -ml-4">dameshek</h1>
      </div>
    </>
  );
}
