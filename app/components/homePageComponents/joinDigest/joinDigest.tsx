import React from "react";

import "./joinDigest.scss";

const JoinDigest: React.FC = () => {
  return (
    <div
      className={` bg-[#3B3B3B] w-[35vw] h-[55vh] flex flex-col justify-evenly`}
    >
      <h1 className={`bg-[#3B3B3B] text-[4vw]  font-semibold leading-[4vw]`}>
        Join our weekly digest
      </h1>
      <p className={` bg-[hsl(0,0%,23%)] text-[1.7vw] `}>
        Get exclusive promotions & updates straight to your inbox.
      </p>
      <div className=" bg-[#3B3B3B] w-[100%] h-[9vh] flex">
        <input
          className="rounded-[1vw] text-[1.5vw] bg-[#fff] h-[9vh] w-[50vw] outline-none placeholder:text-[2B2B2B] text-[black] pl-[1.5vw]  "
          type="text"
          placeholder="Enter your email here"
        />
        <button className="rounded-[1vw] bg-[#A259FF] h-[9vh] w-[30vw] relative right-[3vw]">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default JoinDigest;
