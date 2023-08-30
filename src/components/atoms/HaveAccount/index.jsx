"use client";
import Link from "next/link";
import { StyledHaveAccount } from "./style";

const HaveAccount = ({ question, path, linkText }) => {
  return (
    <StyledHaveAccount gap="3px">
      <p>{question}</p>
      <Link href={path}>{linkText}</Link>
    </StyledHaveAccount>
  );
};

export default HaveAccount;
