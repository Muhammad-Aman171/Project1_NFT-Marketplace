import React from "react";
import Image from "next/image";
import { BrowseCategoriesTypes } from "@/types/homePage/homePage";
import "./browseCategories.scss";

const BrowseCategories: React.FC<BrowseCategoriesTypes> = ({
  srcImg,
  name,
}) => {
  return (
    <div className="browse-categories ">
      <div className="inner-browse-categories">
        <Image src={srcImg!} alt="img does not show" className="img1" />
        <p>{name}</p>
      </div>
    </div>
  );
};
export default BrowseCategories;
