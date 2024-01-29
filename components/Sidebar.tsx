"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeftIcon, MenuIcon } from "lucide-react";
import { Black_Ops_One } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import loaderDemo from "@/lib/LoaderDemo";
import shimmerDemo from "@/lib/ShimmerDemo";

const blackOpsOne = Black_Ops_One({ weight: "400", subsets: ["latin"] });

export default function Sidebar() {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  return (
    <>
      {showSideBar ? (
        <div className="w-1/2 z-30  md:w-1/6 fixed bg-secondaryLight h-screen text-primaryLight dark:bg-gray-950 overflow-y-auto">
          <div className="flex items-center justify-around md:px-2 text-primaryLight px-2">
            <div className={`${blackOpsOne.className} text-xl lg:text-4xl    `}>
              <Link href={"/"}>React UI Loader</Link>
            </div>

            <ArrowLeftIcon
              className="hover:cursor-pointer h-4 w-6 md:h-8 md:w-12 bg-primaryLight text-secondaryLight rounded-full "
              onClick={() => setShowSideBar(false)}
            />
          </div>
          <Accordion type="single" collapsible className="p-5  ">
            <AccordionItem value="item-1 ">
              <AccordionTrigger className="hover:no-underline  ">
                {" "}
                <Link
                  className=" dark:hover:text-secondaryLight hover:text-amber-50 "
                  href={"/documentation"}
                >
                  Documentation
                </Link>{" "}
              </AccordionTrigger>
              <AccordionContent>
                <Link
                  className=" dark:hover:text-secondaryLight hover:text-amber-50 "
                  href={"/documentation#introduction"}
                >
                  Introduction
                </Link>{" "}
                <br />
                <Link
                  className=" dark:hover:text-secondaryLight hover:text-amber-50 "
                  href={"/documentation#motivation"}
                >
                  Motivation
                </Link>{" "}
                <br />
                <Link
                  className=" dark:hover:text-secondaryLight hover:text-amber-50 "
                  href={"/documentation#installation"}
                >
                  Installation
                </Link>
                <br />
                <Link
                  className=" dark:hover:text-secondaryLight hover:text-amber-50 "
                  href={"/documentation#loader"}
                >
                  Loader
                </Link>{" "}
                <br />
                <Link
                  className=" dark:hover:text-secondaryLight hover:text-amber-50 "
                  href={"/documentation#loaderprops"}
                >
                  Loader Props
                </Link>{" "}
                <br />
                <Link
                  className=" dark:hover:text-secondaryLight hover:text-amber-50 "
                  href={"/documentation#shimmer"}
                >
                  Shimmer
                </Link>{" "}
                <br />
                <Link
                  className=" dark:hover:text-secondaryLight hover:text-amber-50 "
                  href={"/documentation#shimmerprops"}
                >
                  Shimmer Props
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="p-5">
            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:no-underline  ">
                {" "}
                <Link
                  className=" dark:hover:text-secondaryLight hover:text-amber-50 "
                  href={"/loaderDemo"}
                >
                  Loader Demo
                </Link>{" "}
              </AccordionTrigger>
              {loaderDemo.map((item, key) => (
                <AccordionContent key={key}>
                  <Link
                    className=" dark:hover:text-secondaryLight hover:text-amber-50 "
                    href={`loaderDemo#${item.id}`}
                  >
                    {item.name}
                  </Link>
                </AccordionContent>
              ))}
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="p-5">
            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:no-underline  ">
                {" "}
                <Link
                  className=" dark:hover:text-secondaryLight hover:text-amber-50 "
                  href={"/shimmerDemo"}
                >
                  Shimmer Demo
                </Link>{" "}
              </AccordionTrigger>
              {shimmerDemo.map((item, key) => (
                <AccordionContent key={key}>
                  <Link
                    className=" dark:hover:text-secondaryLight hover:text-amber-50 "
                    href={`shimmerDemo#${item.id}`}
                  >
                    {item.name}
                  </Link>
                </AccordionContent>
              ))}
            </AccordionItem>
          </Accordion>
        </div>
      ) : (
        <div className="fixed  top-5 left-5">
          <MenuIcon
            className="hover:cursor-pointer bg-primaryLight dark:bg-gray-900 text-secondaryLight h-8 w-8 md:h-10 md:w-10  rounded-md "
            onClick={() => setShowSideBar(true)}
          />
        </div>
      )}
    </>
  );
}
