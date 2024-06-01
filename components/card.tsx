import React from "react";
import card1 from "../public/assets/card1.png";
import Image from "next/image";
import usdc from "../public/assets/usdc.png";
import firstplace from "../public/assets/firstplace.png";

import { Separator } from "./ui/separator";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface CardProps {
  label: string;
}

const Card = ({ label }: CardProps) => {
  return (
    <div>
      <motion.div
        className="flex justify-between flex-between p-2 m-2 transition-shadow duration-300 hover:shadow-lg"
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex space-x-4 justify-center items-center">
          <Image src={card1} alt={""} />
          <div>
            <p>
              Design {"Earn's"} Talent Leaderboard <span>by</span>
              <span>Superteam</span>
            </p>
            <div className="flex space-x-4">
              <Image src={usdc} alt={""} className="w-5 h-5" />
              <p className="text-[#94A3B8]">USDC</p>
              <Separator orientation="vertical" className="h-6 w-[1.5px]" />
              <Image src={firstplace} alt={""} className="" />
              <Badge variant="outline">{label}</Badge>
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
    </div>
  );
};

export default Card;
