"use client";
import Image from "next/image";
import { StyledOutdoorCard } from "./style.js";

const HomeAndOutdoorProductCard = ({ productName, productPrice, imageSrc }) => {
  return (
    <StyledOutdoorCard>
      <div className="text">
        <h3>{productName}</h3>
        <div>
          <span>From</span>
          <span>USD {productPrice}</span>
        </div>
      </div>
      <Image src={imageSrc} width={80} height={80} alt="HomeAndOutdoor-image" loading="lazy" />
    </StyledOutdoorCard>
  );
};

export default HomeAndOutdoorProductCard;
