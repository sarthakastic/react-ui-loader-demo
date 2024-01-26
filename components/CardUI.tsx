import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { useState } from "react";
import { CopyBlock, tomorrowNightBright } from "react-code-blocks";
import Image from "next/image";
import logo from "../public/defaultShimmer.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CardUI = ({ e, setShow }: any) => {
  return (
    <Card
      id={e.id}
      className=" bg-[#ECE3CE] dark:bg-[#001524] shadow-2xl min-h-[420px] m-auto mt-20 w-5/6 md:w-1/3  xl:w-1/5"
    >
      <CardHeader className="m-2 p-1 h-fit shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]">
        {e.image}
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
  );
};

export default CardUI;
