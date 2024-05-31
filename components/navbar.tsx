"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import icon from "../public/icons/Icon.png";

export const Navbar = () => {
  return (
    <nav className=" p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src="path_to_logo" alt="Logo" className="h-10" />
        <a href="/" className="text-white text-lg">
          Jiffscan
        </a>
        <a href="/" className="text-white text-lg">
          Home
        </a>
        <div className="relative group">
          <button className="text-white text-lg">Blockchain</button>
          <div className="absolute hidden group-hover:block bg-white text-black mt-1 p-2 rounded shadow-lg">
            <a href="/" className="block p-2">
              Option 1
            </a>
            <a href="/" className="block p-2">
              Option 2
            </a>
          </div>
        </div>
        <div className="relative group">
          <button className="text-white text-lg">Developers </button>
          <div className="absolute hidden group-hover:block bg-white text-black mt-1 p-2 rounded shadow-lg">
            <a href="/" className="block p-2">
              Option 1
            </a>
            <a href="/" className="block p-2">
              Option 2
            </a>
          </div>
        </div>
        <div className="relative group">
          <button className="text-white text-lg">More</button>
          <div className="absolute hidden group-hover:block bg-white text-black mt-1 p-2 rounded shadow-lg">
            <a href="/" className="block p-2">
              Option 1
            </a>
            <a href="/" className="block p-2">
              Option 2
            </a>
          </div>
        </div>
        <a href="/about" className="text-white text-lg">
          About
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-300 shadow-md hover:shadow-lg"
        />
        <DropdownMenu>
          <DropdownMenuTrigger>
            {" "}
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[200px]">
            <DropdownMenuItem>View Profile</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex justify-between items-center space-x-4">
                <Image src={icon} alt={""} />
                <p>DashBoard</p>
              </div>{" "}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>API</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <button className="text-white text-lg">🌙</button>
      </div>
    </nav>
  );
};
