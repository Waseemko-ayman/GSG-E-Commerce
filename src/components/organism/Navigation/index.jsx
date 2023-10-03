"use client";
/* eslint-disable @next/next/no-img-element */
import Container from "../Container";
import Link from "next/link";
import { StyledAlignFlex, StyledBetweenFlex } from "@/style/common";
import { StyledNavigation } from "./style.js";
import { PATHS } from "@/constants/path";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencys } from "@/redux/slices/currencys";

const Navigation = () => {
  const dispatch = useDispatch();
  const [showNav, setShowNav] = useState(true);
  const { currencys } = useSelector((state) => state.currencys);
  // console.log(currencys)

  const toggleNav = () => {
    setShowNav((prevState) => (prevState === true ? false : true));
  };

  useEffect(() => {
    dispatch(getCurrencys());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledNavigation>
      <Container>
        <StyledBetweenFlex gap="10px" className="nav-links1">
          <StyledAlignFlex gap="10px" className="nav-links">
            <img
              src="/assets/menu.png"
              alt="Menu"
              loading="lazy"
              onClick={toggleNav}
            />
            <StyledAlignFlex
              gap="20px"
              className={showNav ? "showNavigation" : ""}
            >
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
          <StyledAlignFlex gap="32px" className="currency-ship">
            <select name="currency">
              {currencys.map((currency) => (
                <option key={currency?.id} value={currency?.countryName}>
                  {currency?.countryName}, {currency?.currencyCode}
                </option>
              ))}
            </select>
            <select name="ship">
              {currencys.map((currency) => (
                <option key={currency?.id} value={currency?.countryName}>
                  Ship to {currency?.countryName}
                </option>
              ))}
            </select>
          </StyledAlignFlex>
        </StyledBetweenFlex>
      </Container>
    </StyledNavigation>
  );
};

export default Navigation;
