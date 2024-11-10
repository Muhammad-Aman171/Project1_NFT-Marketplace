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
    <div className=" top-creators-cards  ">
      <div className="top-creators-cards-heading ">
        <h1 className={`${spaceMono.className} `}>{para}</h1>
        <Image className="bg-[#3B3B3B]" src={srcImg!} alt="img does not show" />
        <p>{name}</p>
      </div>
      <div className="top-creators-cards-details ">
        <p className={`${spaceMono.className} bg-[#3B3B3B] text-[#00AC4F] `}>
          +1.41%
        </p>
        <p className={`${spaceMono.className} middle-p bg-[#3B3B3B]`}>602</p>
        <p className={`${spaceMono.className} bg-[#3B3B3B]`}>12.4 ETH</p>
      </div>
    </div>
  );
};
export default TopCreators;
