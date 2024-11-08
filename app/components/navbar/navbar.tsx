import React from "react";
import { Space_Mono } from "next/font/google";
import Link from "next/link";

import "./navbar.scss";

import StoreSvg from "../svgs/store";
import UserSvg from "../svgs/user";

const spaceMone = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});
const Navbar: React.FC = () => {
  return (
    <div className=" main-div">
      <div className="navbar">
        <div className=" navbar-heading ">
          <StoreSvg style="w-[32px] h-[32px] " />
          <h1 className={`${spaceMone.className} `}>
            <Link href={"/"} className="font-bold">
              NFT Makrketplace
            </Link>
          </h1>
        </div>
        <div className="navbar-pages">
          <ul>
            <li>
              <Link href={"/ranking"}>Rankings</Link>{" "}
            </li>
            <li>
              <Link href={"/marketplace"}>Marketplace </Link>
            </li>
            <li>
              <Link href={"/connect-wallet"}>Connect a wallet </Link>
            </li>
            <li>
              <Link href={"/sign-up"}>
                <div className="button1 ">
                  <UserSvg style=" h-[20px] w-[20px] bg-[#A259FF] text-[#A259FF] " />
                  <button>Sign Up</button>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
