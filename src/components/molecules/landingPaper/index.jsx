"use client";
import AccountImage from "@/components/atoms/AccountImage";
import Paper from "@/components/atoms/Paper";
import Button from "@/components/atoms/Button";
import { StyledPaper } from "./style.js";
import { StyledFlex } from "@/style/common.js";
import useAuth from "@/hook/useAuth.jsx";
import Link from "next/link.js";
import { PATHS } from "@/constants/path.js";

const LandingPaper = () => {
  const { user } = useAuth();

  return (
    <StyledPaper>
      <div className="account__paper">
        <StyledFlex gap="9px">
          <AccountImage />
          <p>
            Hi, {user?.name} <br /> lets get stated
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
        <Link href={PATHS.LOGIN}>
          <Button
            text="Log in"
            color="primary"
            variant="secondary"
            width="100%"
            padding="7px 0"
            imageHidden
          />
        </Link>
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
