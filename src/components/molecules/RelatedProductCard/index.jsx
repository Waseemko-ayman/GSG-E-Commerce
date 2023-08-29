/* eslint-disable @next/next/no-img-element */
import { StyledFlexCenter } from "@/style/common";
import { StyledRelatedProduct } from "./style";

const RelatedProductCard = ({ imageSrc, productTitle, productPrice }) => {
  return (
    <StyledRelatedProduct>
      <StyledFlexCenter className="image">
        <img src={imageSrc} alt="smart" />
      </StyledFlexCenter>
      <div className="info">
        <p>{productTitle}</p>
        <span>{productPrice}</span>
      </div>
    </StyledRelatedProduct>
  );
};

export default RelatedProductCard;
