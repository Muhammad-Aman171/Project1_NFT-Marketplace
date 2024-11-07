import React from "react";
import Image from "next/image";

import Img1 from "@/public/assets/connet wallet assets/Image Placeholder.png";
import Img2 from "@/public/assets/connet wallet assets/Metamask.png";
import Img3 from "@/public/assets/connet wallet assets/WalletConnect.png";
import Img4 from "@/public/assets/connet wallet assets/Coinbase.png";

import "./connect-wallet.scss";

const ConnectWallet: React.FC = () => {
  return (
    <div className="connect-wallet">
      <div className="inner-connect-wallet">
        <div className="connect-wallet-img">
          <Image src={Img1} alt="img does not show" className="img1" />
        </div>
        <div className="connect-wallet-div2">
          <div className="connect-wallet-heading">
            <h1>Connect wallet</h1>
            <p>
              Choose a wallet you want to connect. There are several wallet
              providers.
            </p>
          </div>
          <div className="connect-wallet-buttons">
            <div>
              <Image
                src={Img2}
                alt="img does not show"
                className="img2 bg-[#3B3B3B]  "
              />
              <h1 className="bg-[#3B3B3B] outline-none ml-[1vw] text-white text-[1.5vw] font-semibold ">
                {" "}
                Metamask
              </h1>
            </div>
            <div>
              <Image
                src={Img3}
                alt="img does not show"
                className="img2 bg-[#3B3B3B]  "
              />
              <h1 className="bg-[#3B3B3B] outline-none ml-[1vw] text-white text-[1.5vw] font-semibold ">
                {" "}
                Wallet Connect
              </h1>
            </div>
            <div>
              <Image
                src={Img4}
                alt="img does not show"
                className="img2 bg-[#3B3B3B]  "
              />
              <h1 className="bg-[#3B3B3B] outline-none ml-[1vw] text-white text-[1.5vw] font-semibold ">
                {" "}
                Coinbase
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConnectWallet;
