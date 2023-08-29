"use client"
/* eslint-disable @next/next/no-img-element */
import { StyledFlexCenter } from "@/style/common";
import { StyledExtraCard } from "./style";

const ExtraServicesCard = ({ imageSrc, imageAlt, iconSrc, title }) => {
  return (
    <StyledExtraCard>
      <img src={imageSrc} alt={imageAlt} />
      <div className="info">
        <StyledFlexCenter className="icon">
          <img src={iconSrc} alt="icon" />
        </StyledFlexCenter>
        <p>{title}</p>
      </div>
    </StyledExtraCard>
  );
};

export default ExtraServicesCard;
