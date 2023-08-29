"use client"
import AccountImage from "@/components/atoms/AccountImage";
import Paper from "@/components/atoms/Paper";
import Button from "@/components/atoms/Button";
import { StyledPaper } from "./style.js";
import { StyledFlex } from "@/style/common.js";

const LandingPaper = () => {
  return (
    <StyledPaper>
      <div className="account__paper">
        <StyledFlex gap="9px">
          <AccountImage />
          <p>
            Hi, user <br /> lets get stated
          </p>
        </StyledFlex>
        <Button
          text="Join now"
          color="secondary"
          variant="primary"
          width="100%"
          padding="7px 0"
          imageHidden
        />
        <Button
          text="Log in"
          color="primary"
          variant="secondary"
          width="100%"
          padding="7px 0"
          imageHidden
        />
      </div>
      <Paper textPaper="Get US $10 off with a new supplier" variant="orange" />
      <Paper
        textPaper="Send quotes with supplier preferences"
        variant="light-blue"
      />
    </StyledPaper>
  );
};

export default LandingPaper;
