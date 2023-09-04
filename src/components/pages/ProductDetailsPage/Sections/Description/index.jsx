/* eslint-disable @next/next/no-img-element */
import { StyledSection } from "@/style/common";
import { StyledDesc } from "./style";
import LikeProductCard from "@/components/molecules/LikeProductCard";
import { LIKE_CARD_DATA } from "@/mock/LikeCard";
import TabsSection from "@/components/pages/TabsSection";

const Description = () => {
  return (
    <StyledDesc>
      <TabsSection />
      <StyledSection padding="15px" className="sidebar">
        <h3>You may like</h3>
        <div className="products">
          {LIKE_CARD_DATA.map(({ id, src, title, price }) => (
            <LikeProductCard
              key={id}
              imageSrc={src}
              productName={title}
              productPrice={price}
            />
          ))}
        </div>
      </StyledSection>
    </StyledDesc>
  );
};

export default Description;
