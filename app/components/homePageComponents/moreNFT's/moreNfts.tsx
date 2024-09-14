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

const MoreNfts: React.FC<MoreNftsTypes> = ({ style,srcImg1,srcImg2,name,imgName}) => {
  return (
    <div className={`${style} rounded-[1.5vw] bg-[#3B3B3B]  w-[25vw] h-[80vh] flex flex-col items-center justify-between   max-md:w-[43vw] max-md:h-[70vh] max-md:rounded-[3.5vw]   `}>
      <Image
        src={srcImg1!}
        alt="img does not show"
        className="w-[40vw] h-[50vh]  max-md:w-[43vw] max-md:h-[45vh] "
      />
      <div className=" relative bottom-[2vh] bg-[#3B3B3B] w-[80%] h-[30%] flex flex-col justify-between max-md:h-[22vh]  ">
        <div>
          <p className="bg-[#3B3B3B] text-[1.7vw] font-semibold  max-md:text-[3vw] ">{name}</p>
          <span className=" flex items-center  bg-[#3B3B3B]  ">
            <Image
              src={srcImg2!}
              alt="img does not show"
              className="bg-[#3B3B3B] max-md:w-[4vw]"
            />
            <p className={`  bg-[#3B3B3B] relative left-[1vw]  max-md:text-[2vw]  ${spaceMono.className}`}>{imgName}</p>
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
