import { Copyright, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-secondaryLight w-screen ">
      <div className="flex justify-around mt-10 py-5  ">
        <div className="flex flex-col gap-5">
          <Link href={"/"}>Home</Link>
          <Link href={"/documentation"}>Documentation</Link>
          <Link href={"https://github.com/sarthakastic/react-ui-loader"}>
            Contribute
          </Link>
          <Link href={"https://github.com/sarthakastic/react-ui-loader/issues"}>
            Issues
          </Link>
        </div>
        <div className="flex flex-col gap-5 ">
          <p className="font-extrabold underline text-xl ">Contact</p>
          <div className="flex justify-centr items-center gap-2  ">
            <Github />
            <Link href="https://github.com/sarthakastic/">Github</Link>
          </div>
          <div className="flex justify-center items-center gap-2  ">
            <Linkedin />
            <Link href="https://www.linkedin.com/in/sarthakastic/">
              Linkedin
            </Link>
          </div>
          <div className="flex justify-center items-center gap-2  ">
            <Twitter />
            <Link href="https://twitter.com/IamsarthakGupta">Twitter</Link>
          </div>
        </div>
      </div>
      <p className="flex justify-center w-screen opacity-40 text-sm">
        {" "}
        <Copyright /> 2024 React UI Loader{" "}
      </p>
    </div>
  );
};

export default Footer;
