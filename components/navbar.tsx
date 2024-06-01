"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import icon from "../public/icons/Icon.png";
import code from "../public/icons/Code.png";
import logout from "../public/icons/log-out.png";
import dashboard from "../public/icons/Dashboard.png";
import logo from "../public/icons/Jiffyscan icon.png";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-around p-2">
      <div className="flex items-center space-x-6">
        <Image src={logo} alt={""} />{" "}
        <a href="/" className="text-black text-lg">
          Home
        </a>
        <div className="relative group">
          <button className="text-black text-lg">Blockchain</button>
          <div className="absolute hidden group-hover:block bg-white text-black mt-1 p-2 rounded shadow-lg">
            <a href="/" className="block p-2">
              Option
            </a>
            <a href="/" className="block p-2">
              Option
            </a>
          </div>
        </div>
        <div className="relative group">
          <button className="text-black text-lg">Developers </button>
          <div className="absolute hidden group-hover:block bg-white text-black mt-1 p-2 rounded shadow-lg">
            <a href="/" className="block p-2">
              Option
            </a>
            <a href="/" className="block p-2">
              Option
            </a>
          </div>
        </div>
        <div className="relative group">
          <button className="text-black text-lg">More</button>
          <div className="absolute hidden group-hover:block bg-white text-black mt-1 p-2 rounded shadow-lg">
            <a href="/" className="block p-2">
              Option
            </a>
            <a href="/" className="block p-2">
              Option
            </a>
          </div>
        </div>
        <a href="/about" className="text-black text-lg">
          About
        </a>
      </div>
      <div className="flex items-center space-x-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-300 shadow-md hover:shadow-lg"
        />
        <DropdownMenu>
          <DropdownMenuTrigger>
            {" "}
            <div className="flex justify-center items-center space-x-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="text-start">
                <p>Shad CN</p>
                <p className="text-black/50">shadcn@gmail.com</p>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[200px]">
            <DropdownMenuItem>
              <div className="flex justify-between items-center space-x-4">
                <Image src={icon} alt={""} />
                <p>View Profile</p>
              </div>{" "}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex justify-between items-center space-x-4">
                <Image src={dashboard} alt={""} />
                <p>DashBoard</p>
              </div>{" "}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex justify-between items-center space-x-4">
                <Image src={code} alt={""} />
                <p>DashBoard</p>
              </div>{" "}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex justify-between items-center space-x-4">
                <Image src={logout} alt={""} />
                <p>DashBoard</p>
              </div>{" "}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <button className="text-black text-lg">🌙</button>
      </div>
    </nav>
  );
};
