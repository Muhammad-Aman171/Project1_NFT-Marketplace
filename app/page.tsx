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
              <button className="">Get Started</button>
            </div>
            <div className=" total-sales ">
              <div className=" text-[2vw] ">
                <h2
                  className={`${spaceMono.className} font-extrabold  max-md:text-[3vw]  `}
                >
                  240k+{" "}
                </h2>
                <p className="font-light text-[23.99px]">Total Sale</p>
              </div>
              <div className="  text-[2vw] ">
                <h2 className={`${spaceMono.className} max-md:text-[3vw]`}>
                  100k+
                </h2>
                <p className="font-light text-[23.99px]">Auctions</p>
              </div>
              <div className="text-[2vw] ">
                <h2 className={`${spaceMono.className} max-md:text-[3vw]`}>
                  240k+
                </h2>
                <p className="font-light text-[23.99px]">Artists</p>
              </div>
            </div>
          </div>

          <div className="header-card1">
            <div className="header-card">
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
                  <p>
                    Animakid
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* section1 is completed */}

      {/* section2 is started */}
      <div className=" container2 ">
        <div className="section2">
          <h2 className="">
            Trending Collection
          </h2>
          <h4 className="text-[1.5vw] font-light h-[12vh] max-md:text-[2.5vw]  ">
            Checkout our weekly updated trending collection.
          </h4>
          <div className=" grid grid-cols-3 gap-[5vw] justify-items-center    max-md:border   max-md:grid-cols-2 max-md:w-[90vw]  ">
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
              // style="max-md:hidden  "
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
      <div className=" my-[10vh] h-[153vh]  w-[80vw] ">
        <div className=" grid grid-cols-[62vw_2fr] justify-center items-end   ">
          <span className=" max-md:w-[50vw]  ">
            <h1 className=" text-[2.5vw] font-semibold   max-md:text-[4vw] ">
              Top Creators
            </h1>
            <p className=" text-[1.5vw] font-light max-md:text-[2.5vw]  ">
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </span>
          <span className="rounded-[1vw] cursor-pointer border-[#A259FF] border-[0.2vw] flex items-center justify-evenly w-[15vw] h-[7vh]  max-md:w-[25vw]  max-md:h-[9vh]  ">
            <RocketSvg style="  h-[5vh] font-bold w-[1.2vw]  max-md:w-[3vw] " />
            <button className="text-[1vw] font-medium  max-md:text-[2vw] ">
              View Rankings
            </button>
          </span>
        </div>
        <div className=" mt-[10vh]  grid grid-cols-4 gap-y-[2vw] max-md:grid-cols-2    ">
          <TopCreatorsCards srcImg={Img15} name="Keepitreal" />
          <TopCreatorsCards srcImg={Img16} name="DigiLab" />
          <TopCreatorsCards srcImg={Img17} name="GravityOne" />
          <TopCreatorsCards srcImg={Img18} name="Juanie" />
          <TopCreatorsCards srcImg={Img19} name="BlueWhale" />
          <TopCreatorsCards srcImg={Img20} name="mr fox" />
          <TopCreatorsCards
            style="max-md:hidden"
            srcImg={Img21}
            name="Shroomie"
          />
          <TopCreatorsCards
            style="max-md:hidden"
            srcImg={Img22}
            name="robotica"
          />
          <TopCreatorsCards
            style="max-md:hidden"
            srcImg={Img23}
            name="RustyRobot"
          />
          <TopCreatorsCards
            style="max-md:hidden"
            srcImg={Img24}
            name="animakid"
          />
          <TopCreatorsCards style="max-md:hidden" srcImg={Img25} name="Dotgu" />
          <TopCreatorsCards
            style="max-md:hidden"
            srcImg={Img26}
            name="Ghiblier"
          />
        </div>
      </div>
      {/* section3 is completed */}

      {/* section4 is started */}
      <div className="  flex flex-col justify-between   h-[140vh] ">
        <h1 className="text-[3vw] font-bold ">Browse Categories</h1>
        <div className="grid grid-cols-4 gap-[2vw] ">
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

      {/* discover more nfts is started */}

      <div className=" w-[80vw] h-[115vh]   flex flex-col justify-between ">
        <div className=" flex justify-between items-center ">
          <span>
            <h1 className="text-[4vw] font-medium  max-md:text-[4.5vw] ">
              Discover More NFTs
            </h1>
            <p className="text-[2.3vw] font-light  max-md:text-[2.7vw] ">
              Explore new trending NFTs
            </p>
          </span>
          <span className="rounded-[1vw] cursor-pointer border-[#A259FF] border-[0.2vw] flex items-center justify-evenly w-[10vw] h-[8vh]   max-md:w-[18vw] ">
            <EyeSvg style="  h-[5vh] font-bold  w-[1.2vw]  max-md:w-[3vw] " />
            <button className="text-[1vw] font-medium max-md:text-[2vw] ">
              See All
            </button>
          </span>
        </div>
        <div className="grid grid-cols-3 gap-[2vw]  max-md:grid-cols-2  max-md:gap-x-[12vw] ">
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
            style="max-md:hidden"
            srcImg1={Img37}
            srcImg2={Img40}
            name="AstroFiction"
            imgName="Spaceone"
          />
        </div>
      </div>

      {/* discover more nfts is completed */}

      {/* how its work section is started */}

      <div className=" h-[100vh] flex flex-col justify-between w-[80%] ">
        <div>
          <h1 className="text-[4vw] font-semibold ">How It Works</h1>
          <p className="text-[2.5vw] font-extralight ">
            Find out how to get started
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[2vw]  max-md:gap-x-[10vw]   ">
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
      <div className="rounded-[2vw] bg-[#3B3B3B] w-[80%] h-[70vh] mb-[20vh]  flex justify-evenly items-center ">
        <Image
          src={Img44}
          alt="img does not show"
          className="bg-[#3B3B3B] w-[35vw] h-[55vh] "
        />
        <JoinDigest />
      </div>
    </div>
  );
};

export default Page;
