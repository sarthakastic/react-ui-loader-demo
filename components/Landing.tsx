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
        className=" flex h-1/4 md:h-screen z-10 w-screen md:w-2/5 absolute shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)] md:shadow-none left-0 md:bottom-0 bg-gradient-to-b md:bg-gradient-to-r from-black to-transparent"
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
        className=" h-2/5 md:h-screen z-10 w-screen md:w-2/5 absolute shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)] md:shadow-none   right-0  -bottom-20 md:bottom-0 flex justify-end bg-gradient-to-t md:bg-gradient-to-l from-black to-transparent"
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
          className={`${silkscreen.className} flex text-xs md:text-sm flex-col justify-center items-center gap-4 mt-10 font-thin `}
        >
          <a
            href="#_"
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#C6A969] transition duration-300 ease-out border-2 border-[#C6A969] rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-[#D6CDA4] duration-300 -translate-x-full bg-[#C6A969] group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-[#C6A969] transition-all duration-300 transform group-hover:translate-x-full ease">
              View Documentation
            </span>
            <span className="relative invisible">Button Text</span>
          </a>
          <a
            href="#_"
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#C6A969] transition duration-300 ease-out border-2 border-[#C6A969] rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-[#D6CDA4] duration-300 -translate-x-full bg-[#C6A969] group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-[#C6A969] transition-all duration-300 transform group-hover:translate-x-full ease">
              View Loader Demo
            </span>
            <span className="relative invisible">Button Text</span>
          </a>
          <a
            href="#_"
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#C6A969] transition duration-300 ease-out border-2 border-[#C6A969] rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-[#D6CDA4] duration-300 -translate-x-full bg-[#C6A969] group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-[#C6A969] transition-all duration-300 transform group-hover:translate-x-full ease">
              View Shimmer Demo
            </span>
            <span className="relative invisible">Button Text</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
