/* eslint-disable @next/next/no-img-element */
"use client";
import {
  StyledBetweenAlignFlex,
  StyledAlignFlex,
  StyledSection,
  StyledFlexCenter,
  StyledBetweenFlex,
} from "@/style/common";
import { StyledProductsListGrid } from "./style";

const ProductsListCard2 = ({
  imageSrc,
  productTitle,
  productPrice,
  oldPrice,
  productRating,
  rateSrc,
}) => {
  return (
    <StyledSection>
      <StyledProductsListGrid>
        <img src={imageSrc} alt="smart electronic" className="product_image" />

        <div className="info">
          <StyledBetweenFlex>
            <div>
              <StyledAlignFlex gap="7px">
                <h3>{productPrice}</h3>
                <del>{oldPrice}</del>
              </StyledAlignFlex>

              <StyledAlignFlex gap="6px" className="rating">
                <img src={rateSrc} alt="rate" />
                <span>{productRating}</span>
              </StyledAlignFlex>
            </div>
            <StyledFlexCenter className="image">
              <img src="/assets/favorite_border.png" alt="favorite_border" />
            </StyledFlexCenter>
          </StyledBetweenFlex>
          <p>{productTitle}</p>
        </div>
      </StyledProductsListGrid>
    </StyledSection>
  );
};

export default ProductsListCard2;
