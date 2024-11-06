import React from 'react'
import Image from 'next/image'
import { BrowseCategoriesTypes } from '@/types/homePage/homePage'
import './browseCategories.scss'

const BrowseCategories: React.FC<BrowseCategoriesTypes> = ({srcImg,name}) => {
  return ( 
    <div className="browse-categories ">
      <Image
        src={srcImg!}
        alt="img does not show"
        
      />

      <p >{name}</p>
    </div>
  )
}
export default BrowseCategories;