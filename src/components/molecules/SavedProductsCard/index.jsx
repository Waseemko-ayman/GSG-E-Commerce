/* eslint-disable @next/next/no-img-element */
import { StyledFlexCenter } from "@/style/common";
import React from "react";
import { StyledSavedProducts } from "./style";
import Button from "@/components/atoms/Button";

const SavedProductsCard = ({ imageSrc, productPrice, productTitle }) => {
  return (
    <StyledSavedProducts>
      <StyledFlexCenter className="image">
        <img src={imageSrc} alt="smart" />
      </StyledFlexCenter>
      <div className="info">
        <span>{productPrice}</span>
        <p>{productTitle}</p>
        <Button
          text="Move to cart"
          color="primary"
          variant="secondary"
          borderColor="gray"
          padding="9px"
          imageSrc="/assets/shopping_cart.svg"
          gap="8px"
        />
      </div>
    </StyledSavedProducts>
  );
};

export default SavedProductsCard;
