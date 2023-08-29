"use client"
/* eslint-disable @next/next/no-img-element */
import Button from "@/components/atoms/Button";
import { StyledSubscribe } from "./style.js";
import { StyledAlignFlex, StyledFlexCenter } from "@/style/common.js";

const Subscribe = () => {
  return (
    <StyledSubscribe>
      <h3>Subscribe on our newsletter</h3>
      <p>
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
      <StyledFlexCenter as="form" gap="8px">
        <StyledAlignFlex gap="6px">
          <img src="/assets/email.svg" alt="email icon" />
          <input type="text" placeholder="Email" />
        </StyledAlignFlex>
        <Button text="Subscribe" color="secondary" variant="primary" padding="10px" imageHidden />
      </StyledFlexCenter>
    </StyledSubscribe>
  );
};

export default Subscribe;
