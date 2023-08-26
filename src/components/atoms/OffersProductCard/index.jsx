"use client";
import Image from "next/image";
import Sale from "../Sale";
import { StyledProductCard } from "./style.js";

const OffersProductCard = ({
  imageSrc,
  imageAlt,
  productName,
  productSale,
}) => {
  return (
    <StyledProductCard>
      <Image src={imageSrc} alt={imageAlt} loading="lazy" />
      <div className="text">
        <p>{productName}</p>
        <Sale sale={productSale} />
      </div>
    </StyledProductCard>
  );
};

export default OffersProductCard;
