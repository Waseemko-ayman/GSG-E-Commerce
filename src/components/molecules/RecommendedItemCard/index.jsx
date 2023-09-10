"use client";
/* eslint-disable @next/next/no-img-element */
import { StyledRecommendedCard } from "./style";

const RecommendedItemCard = ({ imageSrc, price, descProduct }) => {
  return (
    <StyledRecommendedCard>
      <img src={imageSrc} alt="clothes" />
      <div className="info">
        <span>{price}</span>
        <p>{descProduct}</p>
      </div>
    </StyledRecommendedCard>
  );
};

export default RecommendedItemCard;
