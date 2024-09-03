import { StaticImageData } from "next/image";


export interface TrendingCollectionTypes {
  srcImg1?: string | StaticImageData,
  srcImg2?: string | StaticImageData,
  srcImg3?: string | StaticImageData,
  heading?: string,
  personName?: string,
  srcImg4?: string | StaticImageData,
}

export interface TopCreatorsTypes {
  srcImg?: string | StaticImageData,
  name?: string,
}

export interface BrowseCategoriesTypes{
  srcImg?: string | StaticImageData,
  name?: string,
}