/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./style.css";

const ExtraServicesCard = ({ imageSrc, imageAlt, iconSrc, title }) => {
  return (
    <div className="extra_card">
      <img src={imageSrc} alt={imageAlt} />
      <div className="info">
        <div className="icon">
          <img src={iconSrc} alt="icon" />
        </div>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ExtraServicesCard;
