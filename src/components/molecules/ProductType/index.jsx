"use client";
import { Styled, StyledAlignFlex } from "@/style/common";
import { styled } from "styled-components";

const StyledProductType = styled(StyledAlignFlex)`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* margin-bottom: 16px; */

  p:first-of-type {
    color: var(--gray-500-color);
  }
  p {
    color: var(--gray-600-color);
  }
`;

const ProductType = ({ title, value }) => {
  return (
    <StyledProductType>
      <p>{title}:</p>
      <p>{value}</p>
    </StyledProductType>
  );
};

export default ProductType;
