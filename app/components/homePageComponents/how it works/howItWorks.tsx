import React from "react";
import Image from "next/image";
import { HowItWorksTypes } from "@/types/homePage/homePage";

import "./howItWorks.scss";

const HowItWorks: React.FC<HowItWorksTypes> = ({ srcImg, heading, para }) => {
  return (
    <div className="how-it-work ">
      <div>
        <div className="how-img1"><Image src={srcImg!} alt="img does not show" className=" img1" /></div>
        <h1>{heading}</h1>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default HowItWorks;
