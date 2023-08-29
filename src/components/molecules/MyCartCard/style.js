import { StyledBetweenFlex } from "@/style/common";
import { styled } from "styled-components";

export const StledMyCartCard = styled(StyledBetweenFlex)`
border-bottom: 1px solid var(--gray-300-color);
padding-bottom: 20px;
  img {
    max-width: 100%;
    width: 70px;
    height: 70px;
    background-color: var(--gray-300-color);
    border: 1px solid var(--gray-300-color);
    border-radius: 4px;
    padding: 10px;
  }

  h3 {
    color: var(--dark-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
  }

  .size_seller {
    margin: 6px 0 10px;
  }

  p {
    color: var(--gray-500-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
  }

  .price {
    text-align: right;
    width: fit-content;
  }
  input {
    max-width: 100%;
    width: 123px;
  }

  h4 {
    margin-bottom: 12px;
  }
`;