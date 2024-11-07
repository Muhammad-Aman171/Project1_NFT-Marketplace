import React from "react";
import SearchSvg from "../components/svgs/search";
import MoreNfts from "../components/homePageComponents/moreNFT's/moreNfts";

import "./marketplace.scss";

import Img1 from "@/public/assets/market place website/1.png";
import Img2 from "@/public/assets/market place website/2.png";
import Img3 from "@/public/assets/market place website/3.png";
import Img4 from "@/public/assets/market place website/4.png";
import Img5 from "@/public/assets/market place website/5.png";
import Img6 from "@/public/assets/market place website/6.png";
import Img7 from "@/public/assets/market place website/7.png";
import Img8 from "@/public/assets/market place website/8.png";
import Img9 from "@/public/assets/market place website/9.png";
import Img10 from "@/public/assets/market place website/10.png";
import Img11 from "@/public/assets/market place website/11.png";
import Img12 from "@/public/assets/market place website/12.png";
import Img13 from "@/public/assets/market place website/13.png";
import Img14 from "@/public/assets/market place website/14.png";
import Img15 from "@/public/assets/market place website/15.png";
import Img16 from "@/public/assets/market place website/16.png";
import Img17 from "@/public/assets/market place website/17.png";
import Img18 from "@/public/assets/market place website/18.png";
import Img19 from "@/public/assets/market place website/19.png";
import Img20 from "@/public/assets/market place website/20.png";
import Img21 from "@/public/assets/market place website/21.png";
import Img22 from "@/public/assets/market place website/22.png";
import Img23 from "@/public/assets/market place website/23.png";

const Marketplace: React.FC = () => {
  return (
    <div className="marketplace">
      <div className="marketplace-inner-div">
        <div className="marketplace-heading">
          <div className="inner-marketplace-heading">
            <h1>Browse Marketplace</h1>
            <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
          </div>
          <div className="inner-marketplace-search">
            <input type="text" placeholder="Search your favourite NFTs" />
            <SearchSvg style="w-[24px] h-[24px] " />
          </div>
        </div>

        <div className="marketplace-cards">
          <MoreNfts
            srcImg1={Img1}
            name="Magic Mushroom 0325"
            srcImg2={Img13}
            imgName="Shroomie"
          />
          <MoreNfts
            srcImg1={Img2}
            name="Happy Robot 032"
            srcImg2={Img14}
            imgName="BeKind2Robots"
          />
          <MoreNfts
            srcImg1={Img3}
            name="Happy Robot 024"
            srcImg2={Img14}
            imgName="BeKind2Robots"
          />
          <MoreNfts
            srcImg1={Img4}
            name="Designer Bear"
            srcImg2={Img15}
            imgName="Mr Fox"
          />
          <MoreNfts
            srcImg1={Img5}
            name="Colorful Dog 0356"
            srcImg2={Img16}
            imgName="Keepitreal"
          />
          <MoreNfts
            srcImg1={Img6}
            name="Dancing Robot 0312"
            srcImg2={Img17}
            imgName="Robotica"
          />
          <MoreNfts
            srcImg1={Img7}
            name="Cherry Blossom Girl "
            srcImg2={Img18}
            imgName="MoonDancer"
          />
          <MoreNfts
            srcImg1={Img8}
            name="Space Travel"
            srcImg2={Img19}
            imgName="NebulaKid"
          />
          <MoreNfts
            srcImg1={Img9}
            name="Sunset Dimension"
            srcImg2={Img20}
            imgName="Animakid"
          />
          <MoreNfts
            srcImg1={Img10}
            name="Desert Walk"
            srcImg2={Img21}
            imgName="Catch 22"
          />
          <MoreNfts
            srcImg1={Img11}
            name="IceCream Ape 0324"
            srcImg2={Img22}
            imgName="Ice Ape Club"
          />
          <MoreNfts
            srcImg1={Img12}
            name="Colorful Dog 0344"
            srcImg2={Img23}
            imgName="PuppyPower"
          />
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
