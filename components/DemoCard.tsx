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
      <Card className=" min-h-96 z-10 mt-20 w-1/5">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
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
