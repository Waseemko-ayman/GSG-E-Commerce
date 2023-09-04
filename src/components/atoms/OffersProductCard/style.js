import { StyledFlexColumn } from "@/style/common";
import { styled } from "styled-components";

export const StyledProductCard = styled(StyledFlexColumn)`
  min-width: 179px;
  height: 235px;
  padding: 20px;
  border-left: 1px solid var(--gray-300-color);
  background-color: var(--white-color);
  cursor: pointer;

  .text {
    text-align: center;
  }

  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
    margin: 11px 0 7px;
  }

  @media (max-width: 768px) {
    p {
    font-size: 13px;
    }
  }

  img {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    img {
      width: 98px;
      height: 98px;
    }
  }
`;
