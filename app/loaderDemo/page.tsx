import { DemoCard } from "@/components/DemoCard";
import loaderDemo from "@/components/LoaderDemo";
import React from "react";

const LoaderDemo = () => {
  return loaderDemo.map((e, index) => <DemoCard key={index} e={e} />);
};

export default LoaderDemo;
