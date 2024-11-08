import React from "react";
import Image from "next/image";

import Img1 from "@/public/assets/Image Placeholder.png";
import User2Svg from "../components/svgs/user2";
import EmailSvg from "../components/svgs/email";
import LockSvg from "../components/svgs/lockkey";

import "./sign-up.scss";

const SignUp: React.FC = () => {
  return (
    <div className="sign-up">
      <div className="inner-sign-up">
        <div className="sign-up-img">
          <Image
            src={Img1}
            alt="img does not show"
            className="img1"
          />
        </div>
        <div className="sign-up-div2">
          <div className="inner-sign-up-div2">
            <div className="sign-up-div2-heading">
              <h1 className="text-[4vw] font-semibold  ">Create account</h1>
              <p className="text-[2vw] font-extralight w-[70%] ">
                Welcome! enter your details and start creating, collecting and selling
                NFTs.
              </p>
            </div>
            <div className="input-field flex items-center bg-white rounded-[1.7vw] w-[25vw] h-[9vh] ">
              <User2Svg style="w-[3vw] bg-white rounded-l-[1.7vw] pl-[1vw]  h-[9vh] text-[#BDBDBD] " />
              <input
                className="bg-white outline-none ml-[1vw] text-black text-[1.5vw] placeholder:text-[#2B2B2B] "
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="input-field flex items-center bg-white rounded-[1.7vw] w-[25vw] h-[9vh] ">
              <EmailSvg style="w-[3vw] bg-white rounded-l-[1.7vw] pl-[1vw]  h-[9vh] text-[#BDBDBD] " />
              <input
                className="bg-white outline-none ml-[1vw] text-black text-[1.5vw] placeholder:text-[#2B2B2B] "
                type="emial"
                placeholder="Email Address"
              />
            </div>
            <div className="input-field flex items-center bg-white rounded-[1.7vw] w-[25vw] h-[9vh]">
              <LockSvg style="w-[3vw] bg-white rounded-l-[1.7vw] pl-[1vw]  h-[9vh] text-[#BDBDBD] " />
              <input
                className="bg-white outline-none ml-[1vw] text-black text-[1.5vw] placeholder:text-[#2B2B2B] "
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="input-field flex items-center bg-white rounded-[1.7vw] w-[25vw] h-[9vh]">
              <LockSvg style="w-[3vw] bg-white rounded-l-[1.7vw] pl-[1vw]  h-[9vh] text-[#BDBDBD] " />
              <input
                className="bg-white outline-none ml-[1vw] text-black text-[1.5vw] placeholder:text-[#2B2B2B] "
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <div className="sign-up-button">
              <button className="bg-[#A259FF] w-[25vw] h-[9vh] rounded-[1.7vw] text-[1.5vw] font-semibold ">
                Create account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
