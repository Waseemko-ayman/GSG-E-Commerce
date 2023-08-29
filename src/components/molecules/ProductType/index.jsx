"use client";
import { StyledProductType } from "./style";

const ProductType = ({ title, value }) => {
  return (
    <StyledProductType>
      <p>{title}:</p>
      <p>{value}</p>
    </StyledProductType>
  );
};

export default ProductType;
