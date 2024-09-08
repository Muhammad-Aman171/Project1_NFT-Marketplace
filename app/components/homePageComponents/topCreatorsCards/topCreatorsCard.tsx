import React from "react";
import Image from "next/image";

import {TopCreatorsTypes} from '@/types/homePage/homePage'

// import Img1 from '@/public/assets/top creators/1.png'


const TopCreatorsCards: React.FC<TopCreatorsTypes> = ({srcImg,name}) => {
  return (
    <div className=" rounded-[1vw] bg-[#3B3B3B] w-[18vw] h-[40vh] flex flex-col  items-center justify-evenly ">
      <Image 
        src={srcImg!}
        alt="Img does note show"
        className="bg-[#3B3B3B] "
      />
      <h1 className="bg-[#3B3B3B] ">{name}</h1>
      <p className="text-[#858584] bg-[#3B3B3B] ">Total Sales: <span className=" bg-[#3B3B3B] ">34.53 ETH</span> </p>
    </div>
  )
}

export default TopCreatorsCards;