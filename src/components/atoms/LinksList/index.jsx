"use client"
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import "./style.js";
import { StyledLinks } from "./style.js";
import { PATHS } from "@/constants/path.js";

const LinksList = () => {
  return (
    <StyledLinks className="links">
      <Link href="#">
        <img src="/assets/icon-person.png" alt="person icon" loading="lazy" />
        <span>Profile</span>
      </Link>
      <Link href="#">
        <img src="/assets/icon-chat.png" alt="person icon" loading="lazy" />
        <span>Message</span>
      </Link>
      <Link href="#">
        <img src="/assets/icon-favorite.png" alt="person icon" loading="lazy" />
        <span>Orders</span>
      </Link>
      <Link href={PATHS.CART}>
        <img src="/assets/icon-shopping-cart.png" alt="person icon" loading="lazy" />
        <span>My cart</span>
      </Link>
    </StyledLinks>
  );
};

export default LinksList;
