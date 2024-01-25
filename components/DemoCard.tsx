"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "./ui/button";
import { useState } from "react";
import { CopyBlock, tomorrowNightBright } from "react-code-blocks";
import Image from "next/image";
import logo from "../public/logo.png";
import CardUI from "./CardUI";
import { usePathname } from "next/navigation";

export const DemoCard = ({ e }: any) => {
  const [show, setShow] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <>
      <div className="z-50  absolute ">
        {show && pathname.includes("loader") && (
          <div className="m-auto w-screen bg-secondaryLight/75 fixed min-h-screen flex justify-center items-center  ">
            {e.code}
          </div>
        )}
        {show && pathname.includes("loader") && (
          <div className="w-screen h-screen  z-50 flex flex-grow "></div>
        )}
        {show && (
          <div className=" w-screen z-50 top-5 left-10 fixed  ">
            <Button
              onClick={() => {
                setShow(false);
              }}
            >
              Close
            </Button>
          </div>
        )}
      </div>

      {show && pathname.includes("shimmer") && (
        <div className="bg-secondaryLight/75 z-40 w-screen h-screen flex justify-center items-center  fixed ">
          <div className="fixed overflow-y-scroll w-4/5 h-4/5 z-40">
            {e.code}
          </div>
        </div>
      )}

      {/* {show && pathname.includes("shimmer") && (
        <div className=" w-screen z-50 top-5 left-10 fixed  ">
          <Button
            onClick={() => {
              setShow(false);
            }}
          >
            Close
          </Button>
        </div>
      )} */}
      <CardUI e={e} setShow={setShow} />
    </>
  );
};
