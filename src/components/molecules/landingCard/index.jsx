import Image from "next/image";
import React from "react";
import landingCard from "../../../../public/assets/landingImage.png"

const LandingCard = () => {
  return (
    <div className="landing__card">
      <Image src={landingCard} width={664} height={373} alt="landing-image" loading="lazy" />
      {/* <div className="text">
        <p>Latest trending</p>
        <h1>Electronic items</h1>
      </div> */}
    </div>
  );
};

export default LandingCard;
