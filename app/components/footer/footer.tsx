import React from "react";
import { Space_Mono } from "next/font/google";

import StoreSvg from "../svgs/store";
import DiscordSvg from "../svgs/discord";
import YoutubeSvg from "../svgs/youtube";
import TwitterSvg from "../svgs/twitter";
import InstagramSvg from "../svgs/instagram";

import "./footer.scss";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="inner-footer-div">
        <div className="footer-row1">
          <div className="footer-row1-heading ">
            <StoreSvg style="w-[32px] h-[32px] bg-[#3B3B3B]  " />
            <h1 className={` ${spaceMono.className}`}>NFT Marketplace</h1>
          </div>
          <p>NFT marketplace UI created with Anima for Figma.</p>
          <p>Join our community</p>
          <div className="footer-social-icons flex items-center gap-[1vw] bg-[#3B3B3B]  ">
            <DiscordSvg />
            <YoutubeSvg />
            <TwitterSvg />
            <InstagramSvg />
          </div>
        </div>

        <div className="footer-row2  h-[30vh] bg-[#3B3B3B] flex flex-col gap-[1.5vw] ">
          <h1
            className={` ${spaceMono.className} text-[2vw] font-semibold bg-[#3B3B3B] `}
          >
            Explore
          </h1>
          <p className="text-[#CCCCCC] bg-[#3B3B3B] ">Marketplace</p>
          <p className="text-[#CCCCCC] bg-[#3B3B3B] ">Rankings</p>
          <p className="text-[#CCCCCC] bg-[#3B3B3B] ">Connect a wallet</p>
        </div>
        <div
          className={`footer-row3  bg-[#3B3B3B] w-[30vw] h-[30vh] flex flex-col justify-between`}
        >
          <h1
            className={`${spaceMono.className} bg-[#3B3B3B] text-[2vw]  font-semibold leading-[4vw] `}
          >
            Join our weekly digest
          </h1>
          <p className={` text-[#CCCCCC] bg-[hsl(0,0%,23%)] text-[1vw] `}>
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className=" bg-[#3B3B3B] w-[100%] h-[9vh] flex">
            <input
              className="rounded-[1vw] text-[1.2vw] bg-[#fff] h-[9vh] w-[50vw] outline-none placeholder:text-[2B2B2B] text-[black] pl-[1.5vw]  "
              type="text"
              placeholder="Enter your email here"
            />
            <button className="rounded-[1vw] bg-[#A259FF] h-[9vh] w-[30vw] relative right-[3vw]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
