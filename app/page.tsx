// "use client";
import React from "react";
import Image from "next/image";
import { Space_Mono } from "next/font/google";

import "./homePage.scss";

import RocketSvg from "./components/svgs/rocket";
import EyeSvg from "./components/svgs/eye";

import TopCreatorsCards from "./components/homePageComponents/topCreatorsCards/topCreatorsCard";
import TrendingCards from "./components/homePageComponents/trendingCards/trendingCards";
import BrowseCategories from "./components/homePageComponents/browseCategories/browseCategories";
import MoreNfts from "./components/homePageComponents/moreNFT's/moreNfts";
import HowItWorks from "./components/homePageComponents/how it works/howItWorks";
import JoinDigest from "./components/homePageComponents/joinDigest/joinDigest";

import Img1 from "@/public/assets/img1.png";
import Img2 from "@/public/assets/Avatar Placeholder.png";
import Img3 from "@/public/assets/home page assets/trending collection/trending collection img1.png";
import Img4 from "@/public/assets/home page assets/trending collection/trending collection img5.png";
import Img5 from "@/public/assets/home page assets/trending collection/trending collection img7.png";
import Img6 from "@/public/assets/home page assets/trending collection/trending collection img2.png";
import Img7 from "@/public/assets/home page assets/trending collection/trending collection img4.png";
import Img8 from "@/public/assets/home page assets/trending collection/trending collection img8.png";
import Img9 from "@/public/assets/home page assets/trending collection/trending collection img3.png";
import Img10 from "@/public/assets/home page assets/trending collection/trending collection img6.png";
import Img11 from "@/public/assets/home page assets/trending collection/trending collection img9.png";
import Img12 from "@/public/assets/home page assets/trending collection/Avatar Placeholder.png";
import Img13 from "@/public/assets/home page assets/trending collection/Avatar Placeholder (1).png";
import Img14 from "@/public/assets/home page assets/trending collection/Avatar Placeholder (2).png";
import Img15 from "@/public/assets/home page assets/top creators/1.png";
import Img16 from "@/public/assets/home page assets/top creators/2.png";
import Img17 from "@/public/assets/home page assets/top creators/3.png";
import Img18 from "@/public/assets/home page assets/top creators/4.png";
import Img19 from "@/public/assets/home page assets/top creators/5.png";
import Img20 from "@/public/assets/home page assets/top creators/6.png";
import Img21 from "@/public/assets/home page assets/top creators/7.png";
import Img22 from "@/public/assets/home page assets/top creators/8.png";
import Img23 from "@/public/assets/home page assets/top creators/9.png";
import Img24 from "@/public/assets/home page assets/top creators/10.png";
import Img25 from "@/public/assets/home page assets/top creators/11.png";
import Img26 from "@/public/assets/home page assets/top creators/12.png";
import Img27 from "@/public/assets/home page assets/browse cate/1.png";
import Img28 from "@/public/assets/home page assets/browse cate/2.png";
import Img29 from "@/public/assets/home page assets/browse cate/3.png";
import Img30 from "@/public/assets/home page assets/browse cate/4.png";
import Img31 from "@/public/assets/home page assets/browse cate/5.png";
import Img32 from "@/public/assets/home page assets/browse cate/6.png";
import Img33 from "@/public/assets/home page assets/browse cate/7.png";
import Img34 from "@/public/assets/home page assets/browse cate/8.png";
import Img35 from "@/public/assets/home page assets/more nfts/1.png";
import Img36 from "@/public/assets/home page assets/more nfts/2.png";
import Img37 from "@/public/assets/home page assets/more nfts/3.png";
import Img38 from "@/public/assets/home page assets/more nfts/4.png";
import Img39 from "@/public/assets/home page assets/more nfts/5.png";
import Img40 from "@/public/assets/home page assets/more nfts/6.png";
import Img41 from "@/public/assets/home page assets/how it works/1.png";
import Img42 from "@/public/assets/home page assets/how it works/2.png";
import Img43 from "@/public/assets/home page assets/how it works/3.png";
import Img44 from "@/public/assets/Photo.png";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "700",
});

const Page: React.FC = () => {
  return (
    <div className="main-page">
      {/* section1 is started */}
      <div className="container1">
        <section className="section1">
          <div className="header-heading">
            <h1>Discover Digital Art & Collect NFTs</h1>
            <h3>
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </h3>
            <div className="button2">
              <RocketSvg style=" h-[20px] w-[20px]   bg-[#A259FF] " />
              <button>Get Started</button>
            </div>
            <div className=" total-sales">
              <div>
                <h2 className={`${spaceMono.className}`}>240k+ </h2>
                <p>Total Sale</p>
              </div>
              <div>
                <h2 className={`${spaceMono.className} `}>100k+</h2>
                <p>Auctions</p>
              </div>
              <div>
                <h2 className={`${spaceMono.className} `}>240k+</h2>
                <p>Artists</p>
              </div>
            </div>
          </div>

          <div className="header-card1">
            <div className="img1-div">
              <Image src={Img1} alt="img1 does not show" className="img1" />
            </div>
            <div className=" img1-bottom  ">
              <h2>Space Walking</h2>
              <div>
                <Image
                  src={Img2}
                  alt="img2 does not show"
                  className="bg-[#3B3B3B] w-[24px] h-[24px]"
                />
                <p>Animakid</p>
              </div>
            </div>
          </div>

          <div className="button-total-sales">
          <div className="button2">
              <RocketSvg style=" h-[20px] w-[20px]   bg-[#A259FF] " />
              <button>Get Started</button>
            </div>
            <div className=" total-sales">
              <div>
                <h2 className={`${spaceMono.className}`}>240k+ </h2>
                <p>Total Sale</p>
              </div>
              <div>
                <h2 className={`${spaceMono.className} `}>100k+</h2>
                <p>Auctions</p>
              </div>
              <div>
                <h2 className={`${spaceMono.className} `}>240k+</h2>
                <p>Artists</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* section1 is completed */}

      {/* section2 is started */}
      <div className=" container2 ">
        <div className="section2">
          <div className="section2-heading">
            <h2 className="">Trending Collection</h2>
            <h4>Checkout our weekly updated trending collection.</h4>
          </div>
          <div className=" section2-cards">
            <TrendingCards
              // style="max-md:w-[42vw] max-md:h-[78vh]  "
              srcImg1={Img3}
              srcImg2={Img6}
              srcImg3={Img9}
              srcImg4={Img12}
              heading="DSGN Animals"
              personName="MrFox"
            />
            <TrendingCards
              // style="max-md:w-[42vw]  max-md:h-[78vh] "
              srcImg1={Img4}
              srcImg2={Img7}
              srcImg3={Img10}
              srcImg4={Img13}
              heading="Magic Mushrooms"
              personName="Shroomie"
            />
            <TrendingCards
              style="last-section2-cards"
              srcImg1={Img5}
              srcImg2={Img8}
              srcImg3={Img11}
              srcImg4={Img14}
              heading="Disco Machines"
              personName="BeKind2Robots"
            />
          </div>
        </div>
      </div>
      {/* section2 is completed */}

      {/* section3 is started */}
      <div className=" container3">
        <div className="section3">
          <div className="section3-heading-btn">
            <div className="section3-heading">
              <h1>Top Creators</h1>
              <p>Checkout Top Rated Creators on the NFT Marketplace</p>
            </div>
            <div className="section3-btn">
              <RocketSvg style="w-[20px] h-[20px]" />
              <h3>View Rankings</h3>
            </div>
          </div>
          <div className=" top-creators-card">
            <TopCreatorsCards srcImg={Img15} name="Keepitreal" />
            <TopCreatorsCards srcImg={Img16} name="DigiLab" />
            <TopCreatorsCards srcImg={Img17} name="GravityOne" />
            <TopCreatorsCards srcImg={Img18} name="Juanie" />
            <TopCreatorsCards srcImg={Img19} name="BlueWhale" />
            <TopCreatorsCards srcImg={Img20} name="mr fox" />
            <TopCreatorsCards
              srcImg={Img21}
              name="Shroomie"
              style="cards-end"
            />
            <TopCreatorsCards
              srcImg={Img22}
              name="robotica"
              style="cards-end"
            />
            <TopCreatorsCards
              srcImg={Img23}
              name="RustyRobot"
              style="cards-end"
            />
            <TopCreatorsCards
              srcImg={Img24}
              name="animakid"
              style="cards-end"
            />
            <TopCreatorsCards srcImg={Img25} name="Dotgu" style="cards-end" />
            <TopCreatorsCards
              srcImg={Img26}
              name="Ghiblier"
              style="cards-end"
            />
          </div>
        </div>
      </div>
      {/* section3 is completed */}

      {/* section4 is started */}
      <div className="container4">
        <div className="section4">
          <h1>Browse Categories</h1>
          <div className="section4-cards ">
            <BrowseCategories srcImg={Img27} name="Art" />
            <BrowseCategories srcImg={Img28} name="Collectibles" />
            <BrowseCategories srcImg={Img29} name="Music" />
            <BrowseCategories srcImg={Img30} name="Photography" />
            <BrowseCategories srcImg={Img31} name="Video" />
            <BrowseCategories srcImg={Img32} name="Utility" />
            <BrowseCategories srcImg={Img33} name="Sport" />
            <BrowseCategories srcImg={Img34} name="Virtual Worlds" />
          </div>
        </div>
      </div>

      {/* discover more nfts is started */}

      <div className="container5">
        <div className="section5">
          <div className="section5-heading-btn flex justify-between items-center ">
            <div className="section5-heading">
              <h1>Discover More NFTs</h1>
              <p>Explore new trending NFTs</p>
            </div>
            <div className="section5-btn  ">
              <EyeSvg style="w-[20px] h-[20px] " />
              <h3>See All</h3>
            </div>
          </div>
          <div className="section5-cards ">
            <MoreNfts
              srcImg1={Img35}
              srcImg2={Img38}
              name="Distant Galaxy"
              imgName="MoonDancer"
            />
            <MoreNfts
              srcImg1={Img36}
              srcImg2={Img39}
              name="Life On Edena"
              imgName="NebulaKid"
            />
            <MoreNfts
              style="last-section5-card"
              srcImg1={Img37}
              srcImg2={Img40}
              name="AstroFiction"
              imgName="Spaceone"
            />
          </div>
        </div>
      </div>

      {/* discover more nfts is completed */}

      {/* how its work section is started */}

      <div className=" container6">
        <div className="section6">
          <div className="section6-heading">
            <h1>How It Works</h1>
            <p>Find out how to get started</p>
          </div>
          <div className="section6-cards">
            <HowItWorks
              srcImg={Img41}
              heading="Setup Your wallet"
              para="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
            />
            <HowItWorks
              srcImg={Img42}
              heading="Create Collection"
              para="Upload your work and setup your collection. Add a description, social links and floor price."
            />
            <HowItWorks
              srcImg={Img43}
              heading="Start Earning"
              para="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
            />
          </div>
        </div>
      </div>

      <div className="container7">
        <div className="section7">
          <div className="section7-img1">
            <Image src={Img44} alt="img does not show" className="img1" />
          </div>
          <JoinDigest />
        </div>
      </div>
    </div>
  );
};

export default Page;
