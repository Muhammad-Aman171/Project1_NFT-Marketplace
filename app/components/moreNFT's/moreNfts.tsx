import React from "react";
import Image from "next/image";

import Img1 from "@/public/assets/more nfts/1.png";
const MoreNfts: React.FC = () => {
  return (
    <div className="border w-[25vw] ">
      <Image src={Img1} alt="img does not show" />
      <div>
        <p>Distant Galaxy</p>
        <span>
          <p>MoonDancer</p>
        </span>
        <div>
          <span>
            <p>Price</p>
            <p>1.63ETH</p>
          </span>
          <span>
            <p>highest</p>
            <p>0.33 wETH</p>
          </span>
        </div>
      </div>
    </div>
  );
};
export default MoreNfts;
