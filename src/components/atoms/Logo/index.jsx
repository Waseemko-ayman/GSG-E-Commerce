"use client";
import { styled } from "styled-components";
import Image from "next/image";
import Link from "next/link";

const StyledLogo = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
  }

  h1 {
    color: #8cb7f5;
    font-size: 30px;
  }
`;

const Logo = () => {
  return (
    <StyledLogo>
      <Link href="/">
        <Image
          src="/assets/logo.png"
          width={44}
          height={44}
          alt="Brand logo"
          loading="lazy"
        />
        <h1>Brand</h1>
      </Link>
    </StyledLogo>
  );
};

export default Logo;
