/* eslint-disable @next/next/no-img-element */
"use client";
import {
  StyledBetweenAlignFlex,
  StyledAlignFlex,
  StyledSection,
  StyledFlexCenter,
} from "@/style/common";
import { StyledProductsList } from "./style";

const ProductsListCard = ({
  imageSrc,
  productTitle,
  productPrice,
  oldPrice,
  productRating,
  productOrders,
  productDesc,
}) => {
  return (
    <StyledSection margin="0 0 10px 0" padding="20px">
      <StyledProductsList gap="12px">
        <img src={imageSrc} alt="smart electronic" className="product_image" />

        <div className="info">
          <StyledBetweenAlignFlex>
            <h2>{productTitle}</h2>
            <StyledFlexCenter className="image">
              <img src="/assets/favorite_border.png" alt="favorite_border" />
            </StyledFlexCenter>
          </StyledBetweenAlignFlex>

          <StyledAlignFlex gap="7px">
            <h3>{productPrice}</h3>
            <del>{oldPrice}</del>
          </StyledAlignFlex>

          <StyledAlignFlex gap="12px" className="rating">
            <StyledAlignFlex gap="6px">
              <img src="/assets/rating(1).svg" alt="shopping_cart" />
              <span>{productRating}</span>
            </StyledAlignFlex>

            <StyledAlignFlex gap="9px" className="orders">
              <img src="/assets/Dot.svg" alt="shopping_cart" className="dot" />
              <span>{productOrders} orders</span>
            </StyledAlignFlex>

            <StyledAlignFlex gap="9px">
              <img src="/assets/Dot.svg" alt="shopping_cart" className="dot" />
              <span className="free__shipping">Free Shipping</span>
            </StyledAlignFlex>
          </StyledAlignFlex>

          <p>{productDesc}</p>
          <h4>View details</h4>
        </div>
      </StyledProductsList>
    </StyledSection>
  );
};

export default ProductsListCard;
