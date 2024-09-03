import React from 'react'
import Image from 'next/image'
import { BrowseCategoriesTypes } from '@/types/homePage/homePage'

const BrowseCategories: React.FC<BrowseCategoriesTypes> = ({srcImg,name}) => {
  return (
    <div className="  rounded-[1vw] w-[18vw] h-[55vh] bg-[#3B3B3B]  flex flex-col justify-between  ">
      <Image
        src={srcImg!}
        alt="img does not show"
        className="rounded-t-[15px] w-[18vw] h-[45vh] "
      />

      <p className="  text-[1.5vw] w-[15vw] relative left-[2vw] bottom-4 font-bold text-white bg-[#3B3B3B]">{name}</p>
    </div>
  )
}
export default BrowseCategories;