import React from 'react';
import Image from 'next/image';
import { Space_Mono } from 'next/font/google';

import Img1 from '@/public/assets/more nfts/1.png';
import Img2 from '@/public/assets/more nfts/4.png'

import { MoreNftsTypes } from '@/types/homePage/homePage';

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

const MoreNfts: React.FC<MoreNftsTypes> = ({srcImg1,srcImg2,name,imgName}) => {
  return (
    <div className=" rounded-[1.5vw] bg-[#3B3B3B]  w-[25vw] h-[80vh] flex flex-col items-center justify-between ">
      <Image
        src={srcImg1!}
        alt="img does not show"
        className="w-[40vw] h-[50vh] "
      />
      <div className=" relative bottom-[2vh] bg-[#3B3B3B] w-[80%] h-[30%] flex flex-col justify-between ">
        <div>
          <p className="bg-[#3B3B3B] text-[1.7vw] font-semibold ">{name}</p>
          <span className=" flex  bg-[#3B3B3B] ">
            <Image
              src={srcImg2!}
              alt="img does not show"
              className="bg-[#3B3B3B]"
            />
            <p className={`  bg-[#3B3B3B] relative left-[1vw]  ${spaceMono.className}`}>{imgName}</p>
          </span>
        </div>
        <div className=" bg-[#3B3B3B] flex justify-between">
          <span>
            <p  className={`text-[#858584] bg-[#3B3B3B] ${spaceMono.className} `}>Price</p>
            <p className={`bg-[#3B3B3B] ${spaceMono.className} `}>1.63 ETH</p>
          </span>
          <span>
            <p className={`text-[#858584] bg-[#3B3B3B] ${spaceMono.className} `}>highest Bid</p>
            <p className={` bg-[#3B3B3B] ${spaceMono.className} `}>0.33 wETH</p>
          </span>
        </div>
      </div>
    </div>
  );
};
export default MoreNfts;
