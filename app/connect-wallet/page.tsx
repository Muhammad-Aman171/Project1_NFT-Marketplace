import React from "react";
import Image from "next/image";

import Img1 from "@/public/assets/connet wallet assets/Image Placeholder.png";
import Img2 from "@/public/assets/connet wallet assets/Metamask.png";
import Img3 from "@/public/assets/connet wallet assets/WalletConnect.png";
import Img4 from "@/public/assets/connet wallet assets/Coinbase.png";


const SignUp: React.FC = () => {
  return (
    <div className=" h-[130vh] w-[98.5vw] flex items-center justify-between  ">
      <Image
        src={Img1}
        alt="img does not show"
        className=" w-[45vw] h-[130vh] "
      />
      <div className=" w-[50vw] h-[100vh] flex flex-col justify-evenly ">
        <h1 className="text-[4vw] font-semibold  ">Connect wallet</h1>
        <p className="text-[2vw] font-extralight w-[70%] ">
          Choose a wallet you want to connect. There are several wallet
          providers.
        </p>
        <div className="border-[.1vw] border-[#A259FF] flex items-center pl-[4vw] bg-[#3B3B3B] rounded-[1.7vw] w-[22vw] h-[12vh] ">
          <Image
            src={Img2}
            alt="img does not show"
            className="bg-[#3B3B3B]  "
          />
          <h1 className="bg-[#3B3B3B] outline-none ml-[1vw] text-white text-[1.5vw] font-semibold ">   Metamask</h1>
        </div>
        <div className=" border-[.1vw] border-[#A259FF] flex items-center pl-[4vw] bg-[#3B3B3B] rounded-[1.7vw] w-[22vw] h-[12vh] ">
        <Image
            src={Img3}
            alt="img does not show"
            className="bg-[#3B3B3B]  "
          />
          <h1 className="bg-[#3B3B3B] outline-none ml-[1vw] text-white text-[1.5vw] font-semibold ">   Wallet Connect</h1>
        </div>
        <div className="border-[.1vw] border-[#A259FF] flex items-center pl-[4vw] bg-[#3B3B3B] rounded-[1.7vw] w-[22vw] h-[12vh] ">
        <Image
            src={Img4}
            alt="img does not show"
            className="bg-[#3B3B3B]  "
          />
          <h1 className="bg-[#3B3B3B] outline-none ml-[1vw] text-white text-[1.5vw] font-semibold ">   Coinbase</h1>
        </div> 
      </div>
    </div>
  );
};
export default SignUp;
