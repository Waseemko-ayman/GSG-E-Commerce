/* eslint-disable @next/next/no-img-element */
"use client";

import { StyledFlex } from "@/style/common";
import { styled } from "styled-components";

const StyledPath = styled(StyledFlex)`
  p {
    color: var(--gray-500-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
  }
  img {
    max-width: 100%;
    width: 20px;
  }
`;

const Path = ({ pathName, show=true }) => {
  return (
    <StyledPath>
      <p>{pathName}</p>
      {show && <img src="/assets/chevron_right.svg" alt="chevron_right" />}
    </StyledPath>
  );
};

export default Path;
