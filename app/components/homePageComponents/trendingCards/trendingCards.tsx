import React from "react";
import Image from "next/image";
import { Space_Mono } from "next/font/google";

import { TrendingCollectionTypes } from "@/types/homePage/homePage";

import "./trendingCards.scss";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

const TrendingCards: React.FC<TrendingCollectionTypes> = ({
  style,
  heading,
  personName,
  srcImg1,
  srcImg2,
  srcImg3,
  srcImg4,
}) => {
  return (
    <div className={`trending-cards ${style} `}>
      <div className="inner-cards">
       <div className="img1">
          <Image
            src={srcImg1!}
            alt="img1 does not show"
            className=""
          />
       </div>
        <div className="small-imgs">
          <div className="img2">
            <Image
              src={srcImg2!}
              alt="img1 does not show"
              className=""
            />
          </div>
          <div className="img3">
            <Image
              src={srcImg3!}
              alt="img1 does not show"
              className=""
            />
          </div>
          <h1
            className={`${spaceMono.className}  rounded-[1vw] bg-[#A259FF] text-[1.3vw] font-bold w-[7vw] flex items-center justify-center  max-md:w-[12vw] max-md:text-[2vw]  max-md:rounded-[2vw]  `}
          >
            1025+
          </h1>
        </div>
        <p className={`text-[1.2vw] font-bold  max-md:text-[2.5vw] `}>
          {heading}
        </p>
        <div className="flex items-center ">
          <Image
            src={srcImg4!}
            alt="img1 does not show"
            className="w-[1.5vw] h-[3vh] max-md:w-[4vw] max-md:h-[4vh]  "
          />
          <p className="font-light text-[1vw] max-md:text-[2vw]     ">
            {personName}
          </p>
        </div>
      </div>
    </div>
  );
};
export default TrendingCards;
