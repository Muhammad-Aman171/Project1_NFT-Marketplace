import React from "react";
import SearchSvg from "../components/svgs/search";
import MoreNfts from "../components/homePageComponents/moreNFT's/moreNfts";

import Img1 from "@/public/assets/market place website/1.png"
import Img2 from "@/public/assets/market place website/2.png"
import Img3 from "@/public/assets/market place website/3.png"
import Img4 from "@/public/assets/market place website/4.png"
import Img5 from "@/public/assets/market place website/5.png"
import Img6 from "@/public/assets/market place website/6.png"
import Img7 from "@/public/assets/market place website/7.png"
import Img8 from "@/public/assets/market place website/8.png"
import Img9 from "@/public/assets/market place website/9.png"
import Img10 from "@/public/assets/market place website/10.png"
import Img11 from "@/public/assets/market place website/11.png"
import Img12 from "@/public/assets/market place website/12.png"

import Img30 from "@/public/assets/market place website/Avatar Placeholder.png"

const Marketplace: React.FC = () => {
  return (
    <div>
      <div className=" w-[80vw] h-[35vh] flex flex-col justify-between  ">
        <h1 className="text-[4vw] ">Browse Marketplace</h1>
        <p className="text-[1.7vw] ">
          Browse through more than 50k NFTs on the NFT Marketplace.
        </p>
        <div className=" border-[.1vw] rounded-[1vw] w-[79vw] h-[9vh] border-[#3B3B3B] flex items-center">
          <input
            className="w-[80vw] ml-[2vw] h-[7vh] text-[1.5vw] text-[#858584] outline-none  "
            type="text"
            placeholder="Search your favourite NFTs"
          />
          <SearchSvg style="w-[4vw] h-[4vh] mr-[1vw] " />
        </div>
      </div>
      <div className="grid grid-cols-3 my-[10vh] gap-[2vw]">
        <MoreNfts srcImg1={Img1} name="Magic Mushroom 0325" srcImg2={Img30} imgName="Shroomie"/>
        <MoreNfts srcImg1={Img2} name="Happy Robot 032" srcImg2={Img30} imgName="BeKind2Robots"/>
        <MoreNfts srcImg1={Img3} name="Happy Robot 024" srcImg2={Img30} imgName="BeKind2Robots"/>
        <MoreNfts srcImg1={Img4} name="Designer Bear" srcImg2={Img30} imgName="Mr Fox"/>
        <MoreNfts srcImg1={Img5} name="Colorful Dog 0356" srcImg2={Img30} imgName="Keepitreal"/>
        <MoreNfts srcImg1={Img6} name="Dancing Robot 0312" srcImg2={Img30} imgName="Robotica"/>
        <MoreNfts srcImg1={Img7} name="Cherry Blossom Girl 035" srcImg2={Img30} imgName="MoonDancer"/>
        <MoreNfts srcImg1={Img8} name="Space Travel" srcImg2={Img30} imgName="NebulaKid"/>
        <MoreNfts srcImg1={Img9} name="Sunset Dimension" srcImg2={Img30} imgName="Animakid"/>
        <MoreNfts srcImg1={Img10} name="Desert Walk" srcImg2={Img30} imgName="Catch 22"/>
        <MoreNfts srcImg1={Img11} name="IceCream Ape 0324" srcImg2={Img30} imgName="Ice Ape Club"/>
        <MoreNfts srcImg1={Img12} name="Colorful Dog 0344" srcImg2={Img30} imgName="PuppyPower"/>
      </div>
    </div>
  );
};

export default Marketplace;
