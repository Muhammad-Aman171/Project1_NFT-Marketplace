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
          <Image src={srcImg1!} alt="img1 does not show" />
        </div>
        <div className="small-imgs">
          <div className="img2">
            <Image src={srcImg2!} alt="img1 does not show" />
          </div>
          <div className="img3">
            <Image src={srcImg3!} alt="img1 does not show" />
          </div>
          <h1 className={` ${spaceMono.className}`}>1025+</h1>
        </div>
        <p>{heading}</p>
        <div className="last-img">
          <Image src={srcImg4!} alt="img1 does not show" />
          <h6>{personName}</h6>
        </div>
      </div>
    </div>
  );
};
export default TrendingCards;
