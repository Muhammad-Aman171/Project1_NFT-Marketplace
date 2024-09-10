import React from "react";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

const Ranking: React.FC = () => {
  return (
    <div className="w-[80vw] ">
      <h1 className="text-[4vw] ">Top Creators</h1>
      <p className="text-[1.7vw] ">
        Check out top ranking NFT artists on the NFT Marketplace.
      </p>
      <div className="border rounded-[1vw] border-[rgb(59,59,59)] h-[8vh] flex justify-between items-center ">
        <span className=" w-[10vw] flex justify-around items-center ">
          <p className={`${spaceMono.className} text-[#858584] text-[1vw] `}>#</p>
          <p className={`${spaceMono.className} text-[#858584] text-[1vw] `}>Artist</p>
        </span>
        <span className=" w-[50vw]  flex justify-around items-center ">
          <p className={`${spaceMono.className} text-[#858584] text-[1vw] `}>Change</p>
          <p className={`${spaceMono.className} text-[#858584] text-[1vw] `}>NFTs Sold</p>
          <p className={`${spaceMono.className} text-[#858584] text-[1vw] `}>Volume</p>
        </span>
      </div>
      <div></div>
    </div>
  );
};
export default Ranking;
