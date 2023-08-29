/* eslint-disable @next/next/no-img-element */
import Button from "@/components/atoms/Button";
import { CREDIT_SRC } from "@/mock/CreditImage";
import {
  StyledBetweenAlignFlex,
  StyledFlexCenter,
  StyledSection,
} from "@/style/common";
import React from "react";
import { styled } from "styled-components";

const StyledTotalCard = styled(StyledSection)`
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
    padding: 15px 0;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
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

const TotalPriceCard = () => {
  return (
    <StyledTotalCard padding="20px">
      <div className="subtotal">
        <StyledBetweenAlignFlex>
          <span>Subtotal:</span>
          <span>$1403.97</span>
        </StyledBetweenAlignFlex>
        <StyledBetweenAlignFlex>
          <span>Discount:</span>
          <span>- $60.00</span>
        </StyledBetweenAlignFlex>
        <StyledBetweenAlignFlex>
          <span>Tax:</span>
          <span>+ $14.00</span>
        </StyledBetweenAlignFlex>
      </div>
      <StyledBetweenAlignFlex className="total">
        <h4>Total:</h4>
        <span>$1357.97</span>
      </StyledBetweenAlignFlex>
      <Button text="Checkout" color="secondary" variant="green" width="100%" />
      <StyledFlexCenter gap="15px" margin="18px 0 0">
        {CREDIT_SRC.map(({ id, src }) => (
          <StyledFlexCenter className="image" key={id}>
            <img src={src} alt="credit" />
          </StyledFlexCenter>
        ))}
      </StyledFlexCenter>
    </StyledTotalCard>
  );
};

export default TotalPriceCard;
