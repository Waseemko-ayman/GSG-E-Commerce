/* eslint-disable @next/next/no-img-element */
import { StyledLikeCard } from "./style";

const LikeProductCard = ({ imageSrc, productName, productPrice }) => {
  return (
    <StyledLikeCard gap="16px">
      <img src={imageSrc} alt="product" />
      <div className="text">
        <p>{productName}</p>
        <span>{productPrice}</span>
      </div>
    </StyledLikeCard>
  );
};

export default LikeProductCard;
