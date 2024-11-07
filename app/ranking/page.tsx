import React from "react";
import { Space_Mono } from "next/font/google";
import TopCreators from "../components/rankingPageComponents/topCreators/topCreators";

import Img1 from "@/public/assets/ranking page assets/1.png";
import Img2 from "@/public/assets/ranking page assets/2.png";
import Img3 from "@/public/assets/ranking page assets/3.png";
import Img4 from "@/public/assets/ranking page assets/4.png";
import Img5 from "@/public/assets/ranking page assets/5.png";
import Img6 from "@/public/assets/ranking page assets/6.png";
import Img7 from "@/public/assets/ranking page assets/7.png";
import Img8 from "@/public/assets/ranking page assets/8.png";
import Img9 from "@/public/assets/ranking page assets/9.png";
import Img10 from "@/public/assets/ranking page assets/10.png";
import Img11 from "@/public/assets/ranking page assets/11.png";
import Img12 from "@/public/assets/ranking page assets/12.png";
import Img13 from "@/public/assets/ranking page assets/13.png";
import Img14 from "@/public/assets/ranking page assets/14.png";
import Img15 from "@/public/assets/ranking page assets/15.png";
import Img16 from "@/public/assets/ranking page assets/16.png";
import Img17 from "@/public/assets/ranking page assets/17.png";
import Img18 from "@/public/assets/ranking page assets/1.png";
import Img19 from "@/public/assets/ranking page assets/10.png";
import Img20 from "@/public/assets/ranking page assets/3.png";

import "./ranking.scss";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

const Ranking: React.FC = () => {
  return (
    <div className="ranking-page">
      <div className="inner-ranking-page">
        <div className="section1">
          <h1>Top Creators</h1>
          <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
        </div>

        <div className="my-[12vh] flex flex-col gap-[2vw] ">
          <div className="border rounded-[1vw] border-[rgb(59,59,59)] h-[8vh] flex justify-between items-center ">
            <span className=" w-[10vw] flex justify-around items-center ">
              <p
                className={` ${spaceMono.className} text-[#858584] text-[1vw] `}
              >
                #
              </p>
              <p
                className={` ${spaceMono.className} text-[#858584] text-[1vw] `}
              >
                Artist
              </p>
            </span>
            <span className=" w-[45vw]  flex justify-around items-center ">
              <p
                className={`${spaceMono.className} text-[#858584] text-[1vw] `}
              >
                Change
              </p>
              <p
                className={`${spaceMono.className} text-[#858584] text-[1vw] `}
              >
                NFTs Sold
              </p>
              <p
                className={`${spaceMono.className} text-[#858584] text-[1vw] `}
              >
                Volume
              </p>
            </span>
          </div>
          <TopCreators srcImg={Img1} name="Jaydon Ekstrom Bothman" para="1" />
          <TopCreators srcImg={Img2} name="Ruben Carder" para="2" />
          <TopCreators srcImg={Img3} name="Alfredo Septimus" para="3" />
          <TopCreators srcImg={Img4} name="Davis Franci" para="4" />
          <TopCreators srcImg={Img5} name="Livia Rosser" para="5" />
          <TopCreators srcImg={Img6} name="Kianna Donin" para="6" />
          <TopCreators srcImg={Img7} name="Phillip Lipshutz" para="7" />
          <TopCreators srcImg={Img8} name="Maria Rosser" para="8" />
          <TopCreators srcImg={Img9} name="Kianna Stanton" para="9" />
          <TopCreators srcImg={Img10} name="Angel Lubin" para="10" />
          <TopCreators srcImg={Img11} name="Allison Torff" para="11" />
          <TopCreators srcImg={Img12} name="Davis Workman" para="12" />
          <TopCreators srcImg={Img13} name="Lindsey Lipshutz" para="13" />
          <TopCreators srcImg={Img14} name="Randy Carder" para="14" />
          <TopCreators srcImg={Img15} name="Lydia Culhane" para="15" />
          <TopCreators srcImg={Img16} name="Rayna Bator" para="16" />
          <TopCreators srcImg={Img17} name="Jocelyn Westervelt" para="17" />
          <TopCreators srcImg={Img18} name="Marilyn Torff" para="18" />
          <TopCreators srcImg={Img19} name="Skylar Levin" para="19" />
          <TopCreators srcImg={Img20} name="Terry Dorwart" para="20" />
        </div>
      </div>
    </div>
  );
};
export default Ranking;
