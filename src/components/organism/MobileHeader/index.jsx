"use client";
/* eslint-disable @next/next/no-img-element */
import { StyledAlignFlex, StyledBetweenAlignFlex } from "@/style/common";
import { styled } from "styled-components";
import Logo from "@/components/atoms/Logo";
import Link from "next/link";
import Input from "@/components/atoms/Input";
import { PATHS } from "@/constants/path";

const StyledMobileHeader = styled(StyledAlignFlex)`
  background-color: var(--white-color);
  padding: 15px 15px 10px;

  & > div {
    width: 100%;
  }

  .logo + div img {
    width: 24px;
    height: 24px;
  }

  .search {
    margin-top: 15px;
  }

  .search {
    background-color: var(--secondary-color);
    border-radius: 6px;
    width: 100%;
    padding: 0 5px;
    border: 1px solid var(--gray-300-color);
  }

  input {
    height: 35px;
    border: none;
    outline: none;
    border-radius: 0;
    color: var(--gray-500-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    background: transparent;
  }
`;

const MobileHeader = () => {
  return (
    <StyledMobileHeader>
      <div>
        <StyledBetweenAlignFlex>
          <StyledAlignFlex gap="20px" className="logo">
            <img src="/assets/menu.png" alt="Menu" loading="lazy" />
            <Logo />
          </StyledAlignFlex>
          <StyledAlignFlex gap="20px">
            <Link href={PATHS.CART}>
              <img
                src="/assets/icon-shopping-cart.png"
                alt="person icon"
                loading="lazy"
              />
            </Link>
            <Link href="#">
              <img
                src="/assets/icon-person.png"
                alt="person icon"
                loading="lazy"
              />
            </Link>
          </StyledAlignFlex>
        </StyledBetweenAlignFlex>
        <div className="search">
          <Input
            type="search"
            placeholder="Search"
            name="search"
            imageSrc="/assets/graySearch.svg"
          />
        </div>
      </div>
    </StyledMobileHeader>
  );
};

export default MobileHeader;
