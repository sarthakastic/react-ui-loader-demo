"use client";

import { DemoCard } from "@/components/DemoCard";
import loaderDemo from "@/lib/LoaderDemo";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";

const LoaderDemo = () => {
  const [alert, setAlert] = useState<boolean>(true);

  setTimeout(() => {
    setAlert(false);
  }, 5000);

  return (
    <>
      {alert ? (
        <>
          {" "}
          <Alert className="w-fit fixed bottom-28 right-5 slide-to-left1 ">
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              Always add loader at top of your component.
            </AlertDescription>
          </Alert>
          <Alert className="w-fit fixed bottom-5 right-5 slide-to-left2 ">
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              To use loader icon give value in both loader and loaderStyle prop.
            </AlertDescription>
          </Alert>{" "}
        </>
      ) : (
        <div className="fixed bottom-5 right-5 flex flex-col gap-5 text-secondaryLight dark:text-primaryLight   ">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <InfoIcon />
              </TooltipTrigger>
              <TooltipContent>
                - Always add loader at top of your component. <br /> - To use
                loader icon give value in both loader and loaderStyle prop.
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}

      <Sidebar />
      <div className="flex flex-col md:flex-row  flex-wrap gap-5  lg:justify-around   ">
        {loaderDemo.map((e, index) => (
          <DemoCard key={index} e={e} />
        ))}
      </div>
    </>
  );
};

export default LoaderDemo;
