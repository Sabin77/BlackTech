import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

function Navbar() {
  //   const { setTheme } = useTheme();
  return (
    <div className=" flex border-2 h-14 w-screen shadow-md">
      <div className="flex flex-1 w-96  items-center pl-5  place-content-between ">
        <span className="flex-1 text-2xl font-poetsen cursor-pointer">
          Black Blog
        </span>
      </div>
      <div className=" flex flex-1 w-[700px] justify-evenly items-center">
        <p>Home</p>
        <p>Blog</p>
        <p>Pages</p>
        <p>Contact</p>
      </div>
      <div className=" flex items-center  flex-1 ">
        <input
          type="text"
          className="ml-5 outline-none rounded-md border-2 h-10"
        />
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Light</DropdownMenuItem>
            <DropdownMenuItem>Dark</DropdownMenuItem>
            <DropdownMenuItem>System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
        <div className="flex items-center space-x-2 ml-10">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Dark Mode</Label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
