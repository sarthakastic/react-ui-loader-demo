import { DemoCard } from "@/components/DemoCard";
import loaderDemo from "@/lib/LoaderDemo";
import Sidebar from "@/components/Sidebar";
import React from "react";

const LoaderDemo = () => {
  return (
    <>
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
