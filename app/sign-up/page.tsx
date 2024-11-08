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
          <Image src={Img1} alt="img does not show" className="img1" />
        </div>
        <div className="sign-up-div2">
          <div className="inner-sign-up-div2">
            <div className="sign-up-div2-heading">
              <h1 className="text-[4vw] font-semibold  ">Create account</h1>
              <p className="text-[2vw] font-extralight w-[70%] ">
                Welcome! enter your details and start creating, collecting and
                selling NFTs.
              </p>
            </div>
            <div className="input-field ">
              <User2Svg style="w-[20px] h-[20px]" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field ">
              <EmailSvg style="w-[20px] h-[20px] " />
              <input type="emial" placeholder="Email Address" />
            </div>
            <div className="input-field ">
              <LockSvg style="w-[20px] h-[20px]" />
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <LockSvg style="w-[20px] h-[20px] bg-white " />
              <input type="password" placeholder="Confirm Password" />
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
