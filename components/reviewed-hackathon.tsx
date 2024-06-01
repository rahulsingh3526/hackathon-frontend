"use client";
import React from "react";
import card from "../public/assets/card3.png";
import AllCard from "./all-cards";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "./ui/badge";

const ReviewedHackathon = () => {
  return (
    <>
      <motion.div
        className="flex justify-between flex-between p-2 m-2 transition-shadow duration-300 hover:shadow-lg"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex space-x-4 justify-center items-center">
          <Image src={card} alt={""} />
          <div>
            <p>
              Design {"Earn's"} Talent Leaderboard <span>by</span>
              <span>Superteam</span>
            </p>
            <div className="flex space-x-4">
              <p className="text-[#94A3B8]">USDC</p>

              <Badge variant="outline">Design</Badge>
            </div>
          </div>
        </div>
        <div>
          <p>04/04/2023</p>
          <div className="flex space-x-2">
            <p>36</p>
            <p>Participants</p>
          </div>
        </div>
      </motion.div>
      <AllCard />
    </>
  );
};

export default ReviewedHackathon;
