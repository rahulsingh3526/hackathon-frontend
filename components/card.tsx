import Image from "next/image";
import React from "react";
import card1 from "../public/assets/card1.png";
import card2 from "../public/assets/card2.png";
import card3 from "../public/assets/card3.png";
import card4 from "../public/assets/card4.png";
import usdc from "../public/assets/usdc.png";
import firstplace from "../public/assets/firstplace.png";
import { Separator } from "./ui/separator";
import { Badge } from "@/components/ui/badge";

const Card = () => {
  return (
    <div>
      <div className="">
        <div className="flex justify-between flex-between p-2 m-2">
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
                <Badge variant="outline">Design</Badge>
              </div>
            </div>
          </div>
          <div>
            <p>participants</p>
            <p>date</p>
          </div>
        </div>
        <Image src={card2} alt={""} />
        <Image src={card3} alt={""} />
        <Image src={card4} alt={""} />
      </div>
    </div>
  );
};

export default Card;
