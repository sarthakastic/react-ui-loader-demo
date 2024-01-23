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

const blackOpsOne = Black_Ops_One({ weight: "400", subsets: ["latin"] });

export default function Sidebar() {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  return (
    <>
      {showSideBar ? (
        <div className="w-1/2  md:w-1/6 fixed bg-secondaryLight min-h-screen text-amber-50 dark:bg-gray-950 ">
          <div className="flex items-center justify-around md:px-2 text-primaryLight px-2">
            <div className={`${blackOpsOne.className} text-xl lg:text-4xl    `}>
              React UI Loader
            </div>

            <ArrowLeftIcon
              className="hover:cursor-pointer h-4 w-6 md:h-8 md:w-12 bg-primaryLight text-secondaryLight rounded-full "
              onClick={() => setShowSideBar(false)}
            />
          </div>
          <Accordion type="single" collapsible className="p-5">
            <AccordionItem value="item-1">
              <AccordionTrigger>Documentation</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <Link href={"/documentation#introduction"}>Introduction</Link>{" "}
                  <br />
                  <Link href={"/documentation#motivation"}>
                    Motivation
                  </Link>{" "}
                  <br />
                  <Link href={"/documentation#installation"}>Installation</Link>
                  <br />
                  <Link href={"/documentation#loader"}>Loader</Link> <br />
                  <li>Loader Props</li>
                  <li>Shimmer</li>
                  <li>Shimmer Props</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="p-5">
            <AccordionItem value="item-1">
              <AccordionTrigger>Loader Demo</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li>Introduction</li>
                  <li>Installation</li>
                  <li>Loader</li>
                  <li>Loader Props</li>
                  <li>Shimmer</li>
                  <li>Shimmer Props</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="p-5">
            <AccordionItem value="item-1">
              <AccordionTrigger>Shimmer Demo</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li>Introduction</li>
                  <li>Installation</li>
                  <li>Loader</li>
                  <li>Loader Props</li>
                  <li>Shimmer</li>
                  <li>Shimmer Props</li>
                </ul>
              </AccordionContent>
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
