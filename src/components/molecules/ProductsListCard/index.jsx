"use client";
/* eslint-disable @next/next/no-img-element */
import {
  StyledBetweenAlignFlex,
  StyledAlignFlex,
  StyledSection,
  StyledFlexCenter,
} from "@/style/common";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { StyledProductsList } from "./style";
import { useRouter } from "next/navigation";

const ProductsListCard = ({
  productId,
  imageSrc,
  productTitle,
  productPrice,
  oldPrice,
  productRating,
  productOrders,
  productDesc,
  handleAddToCard
}) => {
  const router = useRouter();
  return (
    <StyledSection margin="0 0 10px 0" padding="20px">
      <StyledProductsList>
        <img src={imageSrc} alt="smart electronic" className="product_image" />

        <div className="info">
          <StyledBetweenAlignFlex>
            <h2>{productTitle}</h2>
            <StyledFlexCenter className="image">
              <img src="/assets/favorite_border.svg" alt="favorite_border" onClick={handleAddToCard} />
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
          <StyledAlignFlex className="transition">
            <h4 onClick={() => router.push(`/products/${productId}`)}>View details</h4>
            <ArrowForwardIcon color="primary" fontSize="medium" />
          </StyledAlignFlex>
        </div>
      </StyledProductsList>
    </StyledSection>
  );
};

export default ProductsListCard;
