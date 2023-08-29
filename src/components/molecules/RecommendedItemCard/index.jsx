"use client";
/* eslint-disable @next/next/no-img-element */
import { StyledRecommendedCard } from "./style";

const RecommendedItemCard = ({ imageSrc, imageAlt, price, descProduct }) => {
  return (
    <StyledRecommendedCard>
      <img src={imageSrc} alt={imageAlt} />
      <div className="info">
        <span>{price}</span>
        <p>{descProduct}</p>
      </div>
    </StyledRecommendedCard>
  );
};

export default RecommendedItemCard;
