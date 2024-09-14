import React from "react";
import Image from "next/image";

import {TopCreatorsTypes} from '@/types/homePage/homePage'



const TopCreatorsCards: React.FC<TopCreatorsTypes> = ({srcImg,name}) => {
  return (
    <div className=" rounded-[1vw] bg-[#3B3B3B] w-[18vw] h-[40vh] flex flex-col  items-center justify-evenly     max-md:w-[40vw] max-md:border max-md:flex-row  ">
      <Image 
        src={srcImg!}
        alt="Img does note show"
        className="bg-[#3B3B3B] "
      />
      <div className=" bg-[#3B3B3B]  flex flex-col items-center">
        <h1 className="bg-[#3B3B3B] ">{name}</h1>
        <p className="text-[#858584] bg-[#3B3B3B] ">Total Sales: <span className=" bg-[#3B3B3B] ">34.53 ETH</span> </p>
      </div>
    </div>
  )
}

export default TopCreatorsCards;