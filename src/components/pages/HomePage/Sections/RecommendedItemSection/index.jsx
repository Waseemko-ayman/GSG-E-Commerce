"use client"
import { RECOMMENDED_DATA } from "@/mock/RecommendedItem";
import RecommendedItemCard from "@/components/molecules/RecommendedItemCard";
import { StyledRecommended } from "./style.js";
import { StyledGrid } from "@/style/common.js";

const RecommendedItem = () => {
  return (
    <StyledRecommended>
      <h2>Recommended items</h2>
      <StyledGrid gap= "20px">
        {RECOMMENDED_DATA.map(({ id, src, alt, description, price }) => (
          <RecommendedItemCard
            key={id}
            imageSrc={src}
            imageAlt={alt}
            price={price}
            descProduct={description}
          />
        ))}
      </StyledGrid>
    </StyledRecommended>
  );
};

export default RecommendedItem;
