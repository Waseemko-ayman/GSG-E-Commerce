import { StyledSection } from "@/style/common";
import { styled } from "styled-components";

export const StyledTotalCard = styled(StyledSection)`
  .subtotal {
    padding-bottom: 17px;
    border-bottom: 1px solid var(--gray-300-color);
    color: var(--gray-600-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
  }

  .subtotal div:not(:last-child) {
    margin-bottom: 5px;
  }

  .subtotal div:nth-child(2) span:nth-child(2) {
    color: var(--danger-color);
  }

  .subtotal div:nth-child(3) span:nth-child(2) {
    color: var(--green-color);
  }

  .total {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    margin: 10px 0 20px;
  }

  .total h4 {
    color: var(--dark-color);
    line-height: normal;
  }
  .total span {
    color: var(--dark-color);
    line-height: 28px;
    letter-spacing: -0.2px;
  }

  button {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media (min-width: 321px) and (max-width: 769px) {
    button {
      padding: 10px 0;
    }
  }

  @media (max-width: 321px) {
    button {
      padding: 8px 0;
      font-size: 15px;
    }
  }

  .image {
    border: 1px solid var(--gray-300-color);
    border-radius: 4px;
    padding: 3px;
    width: 34px;
    height: 22px;
    cursor: pointer;
  }
`;
