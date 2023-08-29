"use client";
/* eslint-disable @next/next/no-img-element */
import { StyledPath } from "./style";

const Path = ({ pathName, show = true }) => {
  return (
    <StyledPath>
      <p>{pathName}</p>
      {show && <img src="/assets/chevron_right.svg" alt="chevron_right" />}
    </StyledPath>
  );
};

export default Path;
