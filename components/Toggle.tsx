"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else setTheme("light");
  };

  return (
    <div
      onClick={() => handleTheme()}
      className="fixed z-30 top-5 right-5 font-extrabold "
    >
      <div>
        {/* <DropdownMenuTrigger asChild> */}
        <Button
          variant="outline"
          size="icon"
          className="bg-primaryLight dark:bg-gray-950 hover:bg-primaryLight"
        >
          <Sun className="h-[1.5rem] w-[1.5rem]  bg-primaryLight rotate-0 scale-100 text-secondaryLight transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 text-secondaryLight scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        {/* </DropdownMenuTrigger> */}
        {/* <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent> */}
      </div>
    </div>
  );
}
