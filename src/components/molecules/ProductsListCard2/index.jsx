"use client";
/* eslint-disable @next/next/no-img-element */
import {
  StyledAlignFlex,
  StyledSection,
  StyledFlexCenter,
  StyledBetweenFlex,
} from "@/style/common";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { StyledProductsListGrid } from "./style";
import { useRouter } from "next/navigation";

const ProductsListCard2 = ({
  imageSrc,
  productTitle,
  productPrice,
  oldPrice,
  productRating,
  productId,
}) => {
  const router = useRouter();
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
                <img src="/assets/rating(1).svg" alt="shopping_cart" />
                <span>{productRating}</span>
              </StyledAlignFlex>
            </div>
            <StyledFlexCenter className="image">
              <img src="/assets/favorite_border.svg" alt="favorite_border" />
            </StyledFlexCenter>
          </StyledBetweenFlex>
          <p>{productTitle}</p>
          <StyledAlignFlex className="transition">
            <h4 onClick={() => router.push(`/products/${productId}`)}>View details</h4>
            <ArrowForwardIcon color="primary" fontSize="medium" />
          </StyledAlignFlex>
        </div>
      </StyledProductsListGrid>
    </StyledSection>
  );
};

export default ProductsListCard2;
