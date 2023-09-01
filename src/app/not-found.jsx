/* eslint-disable @next/next/no-img-element */
"use client";
import { StyledFlexCenter } from "@/style/common";
import { styled } from "styled-components";

const StyledNotFound = styled(StyledFlexCenter)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    max-width: 100%;
    width: 100px;
  }

  .error__text {
    color: var(--primary-color);
    text-align: center;
    padding-left: 30px;
    border-left: 1px solid var(--primary-color);
  }

  h1 {
    font-size: 100px;
    animation: up-down 3s linear infinite alternate;
  }

  @keyframes up-down {
    0%,
    100% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(10px);
    }
  }

  p {
    line-height: 1.4;
    text-transform: capitalize;
    margin-top: 20px;
  }
`;

const notFound = () => {
  return (
    <StyledNotFound gap="50px">
      <img src="/assets/Logo.png" alt="logo" />
      <div className="error__text">
        <h1>404</h1>
        <p>Sorry! The Page Not Found</p>
      </div>
    </StyledNotFound>
  );
};

export default notFound;
