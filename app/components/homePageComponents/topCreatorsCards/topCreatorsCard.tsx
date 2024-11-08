import React from "react";
import Image from "next/image";

import {TopCreatorsTypes} from '@/types/homePage/homePage'

import './topCreator.scss'



const TopCreatorsCards: React.FC<TopCreatorsTypes> = ({style, srcImg,name}) => {
  return (
    <div className={`${style} top-creators-cards `} >
      <div className="top-creators-img">
        <Image 
          src={srcImg!}
          alt="Img does note show"
          className="top-creators-img1"
        />
      </div>
      <div className="top-creators-headings">
        <h1 className=" ">{name}</h1>
        <p className="">Total Sales: <span className=" bg-[#3B3B3B] ">34.53 ETH</span> </p>
      </div>
    </div>
  )
}

export default TopCreatorsCards;