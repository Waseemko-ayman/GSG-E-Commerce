"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { StyledLogo } from "./style";

const Logo = () => {
  return (
    <StyledLogo>
      <Link href="/" gap="6px">
        <img src="/assets/logo.png" alt="Brand" loading="lazy" />
        <h1>Brand</h1>
      </Link>
    </StyledLogo>
  );
};

export default Logo;
