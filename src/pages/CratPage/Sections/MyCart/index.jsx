"use client";
import Button from "@/components/atoms/Button";
import CouponCard from "@/components/molecules/CouponCard";
import MyCartCard from "@/components/molecules/MyCartCard";
import TotalPriceCard from "@/components/molecules/TotalPriceCard";
import { MY_CART } from "@/mock/MyCart";
import { StyledBetweenAlignFlex, StyledSection } from "@/style/common";
import { StyledMyCart } from "./style";

const MyCart = () => {
  return (
    <StyledMyCart>
      <StyledSection padding="20px">
        <div className="my_card">
          {MY_CART.map(({ id, src, title, size, seller, price }) => (
            <MyCartCard
              key={id}
              imageSrc={src}
              title={title}
              size={size}
              seller={seller}
              price={price}
            />
          ))}
        </div>
        <StyledBetweenAlignFlex padding="20px 0 0">
          <Button
            text="Back to shop"
            color="secondary"
            variant="primary"
            borderColor="primary"
            padding="9px 0"
            width="159px"
            imageSrc="/assets/arrow_back.svg"
            gap="8px"
          />
          <Button
            text="Remove all"
            color="primary"
            variant="secondary"
            borderColor="gray"
            padding="11px 0"
            width="115px"
            imageHidden
          />
        </StyledBetweenAlignFlex>
      </StyledSection>
      <div>
        <CouponCard />
        <TotalPriceCard />
      </div>
    </StyledMyCart>
  );
};

export default MyCart;
