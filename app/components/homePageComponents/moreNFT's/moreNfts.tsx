import React from "react";
import Image from "next/image";
import { Space_Mono } from "next/font/google";
import { MoreNftsTypes } from "@/types/homePage/homePage";

import "./moreNFT.scss";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

const MoreNfts: React.FC<MoreNftsTypes> = ({
  style,
  srcImg1,
  srcImg2,
  name,
  imgName,
}) => {
  return (
    <div className={`${style} more-nfts`}>
      <div className="more-nfts-img">
        <Image src={srcImg1!} alt="img does not show" />
      </div>
      <div className="more-nfts-bottom">
        <div className="more-nfts-bottom-heading">
          <p>{name}</p>
          <div className="more-nfts-bottom-img">
            <Image
              src={srcImg2!}
              alt="img does not show"
              className="bg-[#3B3B3B]"
            />
            <h4 className={` ${spaceMono.className}`}>{imgName}</h4>
          </div>
        </div>
        <div className="more-nfts-bottom-prices ">
          <div>
            <p className={` ${spaceMono.className} `}>Price</p>
            <h3 className={` ${spaceMono.className} `}>1.63 ETH</h3>
          </div>
          <div>
            <p className={` ${spaceMono.className} `}>highest Bid</p>
            <h3 className={`${spaceMono.className} `}>0.33 wETH</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MoreNfts;
