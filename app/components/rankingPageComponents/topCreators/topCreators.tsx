import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import { Space_Mono } from "next/font/google";

import "./top-creators.scss";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

export type TopCreatorsTypes = {
  para?: string;
  srcImg?: string | StaticImageData | undefined;
  name?: string;
};

const TopCreators: React.FC<TopCreatorsTypes> = ({ srcImg, name, para }) => {
  return (
    <div className="rounded-3xl  bg-[#3B3B3B]  flex items-center  ">
      <div className=" rounded-2xl bg-[#3B3B3B] flex justify-around items-center">
        <span
          className={`${spaceMono.className}  rounded-[50%] w-[2vw] h-[4.5vh] flex justify-center items-center `}
        >
          {para}
        </span>
        <span className=" w-[85%] bg-[#3B3B3B] flex items-center">
          <Image
            className="  bg-[#3B3B3B]"
            src={srcImg!}
            alt="img does not show"
          />
          <p className="ml-[1.5vw] text-[1.8vw] font-semibold bg-[#3B3B3B]">
            {name}
          </p>
        </span>
      </div>
      <div className=" bg-[#3B3B3B] flex justify-between items-center ">
        <p className={`${spaceMono.className} bg-[#3B3B3B] text-[#00AC4F] `}>
          +1.41%
        </p>
        <p className={`${spaceMono.className} bg-[#3B3B3B]`}>602</p>
        <p className={`${spaceMono.className} bg-[#3B3B3B]`}>12.4 ETH</p>
      </div>
    </div>
  );
};
export default TopCreators;
