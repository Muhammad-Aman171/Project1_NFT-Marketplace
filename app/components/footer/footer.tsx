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
          <div className="footer-social-icons">
            <DiscordSvg />
            <YoutubeSvg />
            <TwitterSvg />
            <InstagramSvg />
          </div>
        </div>

        <div className="footer-row2">
          <h1 className={` ${spaceMono.className} `}>Explore</h1>
          <p>Marketplace</p>
          <p>Rankings</p>
          <p>Connect a wallet</p>
        </div>

        <div className={`footer-row3`}>
          <h1 className={`${spaceMono.className}`}>Join our weekly digest</h1>
          <p>Get exclusive promotions & updates straight to your inbox.</p>
          <div>
            <input type="text" placeholder="Enter yor email here" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
