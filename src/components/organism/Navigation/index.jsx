/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./style.css";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  return (
    <div className="navigation">
      <Container betweenFlex>
        <div className="nav-links">
          <Image src="/assets/menu.png" width={24} height={24} alt="Menu" loading="lazy" />
          <div>
            <Link href="#">All category</Link>
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
          </div>
        </div>
        <div className="lang-ship">
          <select name="lang">
            <option value="1">English, USD</option>
            <option value="2">English, USD</option>
            <option value="3">English, USD</option>
            <option value="4">English, USD</option>
            <option value="5">English, USD</option>
          </select>
          <select name="ship">
            <option value="1">
              Ship to1{" "}
              {/* <Image
                src="/assets/germany-flag.png"
                width={24}
                height={24}
                alt="Menu"
                loading="lazy"
              /> */}
              <img src="/assets/germany-flag.png" alt="germany-flag" loading="lazy"/>
            </option>
            <option value="1">
              Ship to2{" "}
              {/* <Image
                src="/assets/germany-flag.png"
                width={24}
                height={24}
                alt="Menu"
                loading="lazy"
              /> */}
              <img src="/assets/germany-flag.png" alt="germany-flag" loading="lazy"/>
            </option>
          </select>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
