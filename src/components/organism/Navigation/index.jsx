"use client";
/* eslint-disable @next/next/no-img-element */
import Container from "../Container";
import Link from "next/link";
import { StyledAlignFlex, StyledBetweenFlex } from "@/style/common";
import { StyledNavigation } from "./style.js";
import { PATHS } from "@/constants/path";

const Navigation = () => {
  return (
    <StyledNavigation>
      <Container>
        <StyledBetweenFlex>
          <StyledAlignFlex gap="10px" className="nav-links">
            <img src="/assets/menu.png" alt="Menu" loading="lazy" />
            <StyledAlignFlex gap="28px">
              <Link href={PATHS.PRODUCTS}>All category</Link>
              <Link href="#">Hot offers</Link>
              <Link href="#">Gift boxes</Link>
              <Link href="#">Projects</Link>
              <Link href="#">Menu item</Link>
              <select name="help">
                <option value="1">Help</option>
                <option value="2">Help</option>
                <option value="3">Help</option>
                <option value="4">Help</option>
                <option value="5">Help</option>
              </select>
            </StyledAlignFlex>
          </StyledAlignFlex>
          <StyledAlignFlex gap="32px" className="lang-ship">
            <select name="lang">
              <option value="1">English, USD</option>
              <option value="2">English, USD</option>
              <option value="3">English, USD</option>
              <option value="4">English, USD</option>
              <option value="5">English, USD</option>
            </select>
            <select name="ship">
              <option value="1">Ship to1</option>
              <option value="1">Ship to2</option>
            </select>
          </StyledAlignFlex>
        </StyledBetweenFlex>
      </Container>
    </StyledNavigation>
  );
};

export default Navigation;
