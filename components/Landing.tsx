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
        className=" flex h-1/4 md:h-screen z-10 w-screen md:w-2/5 absolute  left-0 md:bottom-0 bg-gradient-to-b md:bg-gradient-to-r from-black to-transparent"
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
        className=" h-2/5 md:h-screen z-10 w-screen md:w-2/5 absolute  right-0  -bottom-20 md:bottom-0 flex justify-end bg-gradient-to-t md:bg-gradient-to-l from-black to-transparent"
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

        <div
          className={`${silkscreen.className} flex text-xs md:text-lg flex-col justify-center items-center gap-4 md:mt-10 font-thin `}
        >
          <a
            href="#_"
            className="relative px-5 py-3 overflow-hidden font-medium text-[#D6CDA4] bg-[#C6A969]  border border-[#D6CDA4]  rounded-lg shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#D6CDA4] bg-[#D6CDA4] group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#D6CDA4] bg-[#D6CDA4] group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#D6CDA4] group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#D6CDA4] group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#D6CDA4] opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-[#C6A969] ease">
              Read Documentation
            </span>
          </a>
          <a
            href="#_"
            className="relative px-5 py-3 overflow-hidden font-medium text-[#D6CDA4] bg-[#C6A969]  border border-[#D6CDA4]  rounded-lg shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#D6CDA4] bg-[#D6CDA4] group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#D6CDA4] bg-[#D6CDA4] group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#D6CDA4] group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#D6CDA4] group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#D6CDA4] opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-[#C6A969] ease">
              View Loader Demo
            </span>
          </a>
          <a
            href="#_"
            className="relative px-5 py-3 overflow-hidden font-medium text-[#D6CDA4] bg-[#C6A969]  border border-[#D6CDA4]  rounded-lg shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#D6CDA4] bg-[#D6CDA4] group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#D6CDA4] bg-[#D6CDA4] group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#D6CDA4] group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#D6CDA4] group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#D6CDA4] opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-[#C6A969] ease">
              View Shimmer Demo
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
