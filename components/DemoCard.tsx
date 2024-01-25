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

export const DemoCard = ({ e }: any) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div className="z-50  absolute ">
        {show && (
          <div className="m-auto w-screen bg-secondaryLight/75 fixed min-h-screen flex justify-center items-center  ">
            {e.code}
          </div>
        )}
        {show && (
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
      <Card className=" bg-[#ECE3CE] dark:bg-[#001524] shadow-2xl min-h-96 m-auto mt-20 w-5/6 md:w-1/3  xl:w-1/5">
        <CardHeader className="m-2 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]">
          <Image src={logo} alt="logo" height={200} width={400} />
        </CardHeader>
        <CardContent>
          <CardTitle>{e.name}</CardTitle>
          <p>{e.description}</p>
        </CardContent>
        <CardFooter className="w-full  flex justify-around ">
          <Button
            onClick={() => {
              setShow(true);
            }}
          >
            View Demo
          </Button>
          <Dialog>
            <DialogTrigger className="rounded-md bg-white text-black p-2 ">
              View Code
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  <CopyBlock
                    text={e.demoCode}
                    language={"typescript"}
                    showLineNumbers={false}
                    theme={tomorrowNightBright}
                    codeBlock
                  />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </>
  );
};
