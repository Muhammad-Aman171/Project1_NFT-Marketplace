import React from 'react'
import Image from 'next/image'
import { Space_Mono } from 'next/font/google'

import {TrendingCollectionTypes} from '@/types/homePage/homePage'

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
})

const TrendingCards: React.FC<TrendingCollectionTypes> = ({heading,personName,srcImg1,srcImg2,srcImg3,srcImg4 }) => {
  return (
    <div className=" h-[75vh] flex flex-col justify-between " >
      <Image
        src={srcImg1!}
        alt="img1 does not show"
        className="h-[50vh] w-[25vw]  "
      />
      <div className=" flex justify-between ">
        <Image 
          src={srcImg2!}
          alt="img1 does not show"
          className="w-[7vw]  "
        />  
        <Image
          src={srcImg3!}
          alt="img1 does not show"
          className="w-[7vw]  "
        />
        <h1 className={`${spaceMono.className}  rounded-[1vw] bg-[#A259FF] text-[1.3vw] font-bold w-[7vw] flex items-center justify-center `}>1025+</h1>
      </div>
      <p className={ `text-[1.2vw] font-bold `}>{heading}</p>
      <div className="flex">
        <Image
          src={srcImg4!}
          alt="img1 does not show"
          className="w-[1.5vw] h-[3vh]"
        />
        <p className="font-light text-[1vw] ">{personName}</p>
      </div>
    </div>
  )
}
export default TrendingCards;