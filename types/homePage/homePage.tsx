import { StaticImageData } from "next/image";

export interface TrendingCollectionTypes {
  style?:string;
  srcImg1?: string | StaticImageData;
  srcImg2?: string | StaticImageData;
  srcImg3?: string | StaticImageData;
  heading?: string;
  personName?: string;
  srcImg4?: string | StaticImageData;
}

export interface TopCreatorsTypes {
  style?:string;
  srcImg?: string | StaticImageData;
  name?: string;
}

export interface BrowseCategoriesTypes {
  srcImg?: string | StaticImageData;
  name?: string;
}

export interface MoreNftsTypes {
  style?:string;
  srcImg1?: string | StaticImageData;
  srcImg2?: string | StaticImageData;
  name?: string;
  imgName?: string;
}

export interface HowItWorksTypes {
  srcImg?: string | StaticImageData;
  heading?: string;
  para?: string;
}

