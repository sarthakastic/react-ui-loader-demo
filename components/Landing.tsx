"use client";

import useHover3d from "@/lib/hover";
import React, { useRef, useState, useEffect } from "react";
import { ProfileShimmer, TextLoader } from "react-ui-loader";
import { Black_Ops_One } from "next/font/google";
import { Silkscreen } from "next/font/google";

const blackOpsOne = Black_Ops_One({ weight: "400", subsets: ["latin"] });
const silkscreen = Silkscreen({ weight: "400", subsets: ["latin"] });

const Landing = () => {
  const widthSize = window.innerWidth;

  const [screenWidth, setScreenWidth] = useState<string>("100%");

  const shimmer = useRef<HTMLDivElement>(null);
  const loader = useRef<HTMLDivElement>(null);

  const hoverShimmer = useHover3d(shimmer, {
    x: 20,
    y: 20,
    z: -20,
  });
  const hoverLoader = useHover3d(loader, {
    x: 20,
    y: 100,
    z: -200,
  });

  useEffect(() => {
    widthSize < 720 ? setScreenWidth("100%") : setScreenWidth("80%");
  }, [widthSize]);

  return (
    <div>
      <div
        ref={loader}
        className=" flex h-2/5 md:h-screen z-10 w-screen md:w-2/5 absolute  left-0 md:bottom-0 bg-gradient-to-b md:bg-gradient-to-r from-black to-transparent"
        style={{ transform: hoverLoader.transform }}
      >
        <TextLoader
          show={true}
          widthValue={screenWidth}
          heightValue={"100%"}
          loader={true}
          loaderStyle="DotLoader"
          bgColor="#222831"
        />
      </div>

      <div
        ref={shimmer}
        className=" h-2/5 md:h-screen z-10 w-screen md:w-2/5 absolute  right-0 bottom-0 flex justify-end bg-gradient-to-t md:bg-gradient-to-l from-black to-transparent"
        style={{ transform: hoverShimmer.transform }}
      >
        <ProfileShimmer
          show={true}
          numberOfCards={2}
          numberOfLines={4}
          cardHeight="180px"
          coverHeight="150px"
          profileDimension="100px"
          lineHeight="10px"
          shimmerWidth={screenWidth}
          shimmerHeight={widthSize > 720 ? "100%" : "fit-content"}
          showCards={widthSize > 720 ? true : false}
        />
      </div>

      <div
        className={`absolute z-0 text-4xl dark:text-blue-100 text-center text-blue-950 flex flex-col justify-center items-center h-screen w-screen `}
      >
        <div
          className={`${blackOpsOne.className} md:text-2xl lg:text-4xl text-[#C6A969] `}
        >
          React UI Loader{" "}
        </div>
        <div className={`${silkscreen.className} text-sm text-[#D6CDA4]`}>
          A simple ui library <br /> for loaders and shimmers
        </div>
      </div>
    </div>
  );
};

export default Landing;
