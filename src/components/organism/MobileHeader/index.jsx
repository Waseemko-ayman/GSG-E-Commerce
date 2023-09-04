"use client";
/* eslint-disable @next/next/no-img-element */
import { StyledAlignFlex, StyledBetweenAlignFlex } from "@/style/common";
import Logo from "@/components/atoms/Logo";
import Link from "next/link";
import Input from "@/components/atoms/Input";
import { PATHS } from "@/constants/path";
import { StyledMobileHeader } from "./style";
import TemporaryDrawer from "../Menu";

const MobileHeader = () => {
  return (
    <StyledMobileHeader>
      <div>
        <StyledBetweenAlignFlex>
          <StyledAlignFlex gap="5px" className="logo">
            <TemporaryDrawer />
            <Logo />
          </StyledAlignFlex>
          <StyledAlignFlex gap="15px">
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
