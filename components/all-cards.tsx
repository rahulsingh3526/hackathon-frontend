"use client";
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
import { motion } from "framer-motion";
import Card from "./card";
import { useState } from "react";

const cardData = [
  {
    id: 1,
    img: card1,
    title: "Design Earn's Talent Leaderboard",
    by: "Superteam",
    date: "04/04/2023",
    participants: 36,
    badges: ["design", "developer"],
  },
  {
    id: 2,
    img: card2,
    title: "Frontend Challenge",
    by: "DevTeam",
    date: "05/04/2023",
    participants: 24,
    badges: ["developer"],
  },
  {
    id: 3,
    img: card3,
    title: "Backend Battle",
    by: "BackendMasters",
    date: "06/04/2023",
    participants: 30,
    badges: ["design"],
  },
  {
    id: 4,
    img: card4,
    title: "UI/UX Design Sprint",
    by: "CreativeHeads",
    date: "07/04/2023",
    participants: 42,
    badges: ["design"],
  },
];

const AllCard = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredCards =
    selectedTag === "All"
      ? cardData
      : cardData.filter((card) => card.badges[1] === selectedTag);

  return (
    <div>
      <div className="space-y-2">
        {filteredCards.map((card) => (
          <motion.div
            key={card.id}
            className="flex justify-between flex-between p-2 m-2 transition-shadow duration-300 hover:shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex space-x-4 justify-center items-center">
              <Image src={card.img} alt={card.title} />
              <div className="space-y-2">
                <p className="space-x-1 text-sm">
                  {card.title} <span>by</span>
                  <span>{card.by}</span>
                </p>
                <div className="flex space-x-4">
                  <Image src={usdc} alt="USDC" className="w-5 h-5" />
                  <p className="text-[#94A3B8]">USDC</p>
                  <Separator orientation="vertical" className="h-6 w-[1.5px]" />
                  <Image src={firstplace} alt="First Place" className="" />
                  {card.badges.map((badge, index) => (
                    <Badge
                      className="px-1 text-xs"
                      key={index}
                      variant="outline"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p>{card.date}</p>
              <div className="flex space-x-2">
                <p>{card.participants}</p>
                <p>Participants</p>
              </div>
            </div>
          </motion.div>
        ))}
        <Card label="Design" />
        {/* <motion.div
          className="flex justify-between flex-between p-2 m-2 transition-shadow duration-300 hover:shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex space-x-4 justify-center items-center">
            <Image src={card2} alt={""} />
            <div className="space-y-2">
              <p className="text-sm">
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
            <p>04/04/2023</p>
            <div className="flex space-x-2">
              <p>36</p>
              <p>Participants</p>
            </div>
          </div>
        </motion.div> */}
        {/* <motion.div
          className="flex justify-between flex-between p-2 m-2 transition-shadow duration-300 hover:shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex space-x-4 justify-center items-center">
            <Image src={card3} alt={""} />
            <div className="space-y-2">
              <p className="text-sm">
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
            <p>04/04/2023</p>
            <div className="flex space-x-2">
              <p>36</p>
              <p>Participants</p>
            </div>
          </div>
        </motion.div>{" "} */}
        <motion.div
          className="flex justify-between flex-between p-2 m-2 transition-shadow duration-300 hover:shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex space-x-4 justify-center items-center">
            <Image src={card4} alt={""} />
            <div className="space-y-2">
              <p className="text-sm">
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
            <p>04/04/2023</p>
            <div className="flex space-x-2">
              <p>36</p>
              <p>Participants</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AllCard;
