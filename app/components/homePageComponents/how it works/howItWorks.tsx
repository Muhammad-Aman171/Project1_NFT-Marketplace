import React from "react";
import Image from "next/image";


import { HowItWorksTypes } from "@/types/homePage/homePage";

const HowItWorks: React.FC<HowItWorksTypes> = ({ srcImg, heading, para }) => {
  return (
    <div className="  h-[70vh] rounded-[1vw] bg-[#3B3B3B] text-center flex flex-col items-center justify-evenly  max-md:w-[30vw] ">
      <Image src={srcImg!} alt="img does not show" className=" bg-[#3B3B3B]" />
      <h1 className=" bg-[#3B3B3B] text-[2vw] font-semibold ">
        {heading}
      </h1>
      <p className=" bg-[#3B3B3B] w-[90%] text-[1.3vw] ">
        {para}
      </p>
    </div>
  );
};

export default HowItWorks;
