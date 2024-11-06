import React from "react";

import "./joinDigest.scss";

const JoinDigest: React.FC = () => {
  return (
    <div className="join-digest">
      <h1>Join our weekly digest</h1>
      <p>Get exclusive promotions & updates straight to your inbox.</p>
      <div>
        <input type="text" placeholder="Enter your email here" />
        <h5>Subscribe</h5>
      </div>
    </div>
  );
};

export default JoinDigest;
