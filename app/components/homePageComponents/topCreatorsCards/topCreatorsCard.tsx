import React from "react";
import Image from "next/image";

import {TopCreatorsTypes} from '@/types/homePage/homePage'

import './topCreator.scss'



const TopCreatorsCards: React.FC<TopCreatorsTypes> = ({style, srcImg,name}) => {
  return (
    <div className={`${style} top-creators-cards rounded-[1vw] bg-[#3B3B3B] w-[18vw] h-[40vh] flex flex-col  items-center justify-evenly     max-md:w-[37vw] max-md:border max-md:flex-row max-md:h-[15vh]  max-md:rounded-[3vw] `} >
      <Image 
        src={srcImg!}
        alt="Img does note show"
        className="bg-[#3B3B3B]   max-md:w-[7vw]  "
      />
      <div className=" bg-[#3B3B3B]  flex flex-col items-center  max-md:items-start">
        <h1 className="bg-[#3B3B3B]  max-md:text-[2.5vw] max-md:font-semibold  ">{name}</h1>
        <p className="text-[#858584] bg-[#3B3B3B] ">Total Sales: <span className=" bg-[#3B3B3B] ">34.53 ETH</span> </p>
      </div>
    </div>
  )
}

export default TopCreatorsCards;