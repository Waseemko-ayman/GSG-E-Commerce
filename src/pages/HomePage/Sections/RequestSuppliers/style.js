import { StyledBetweenFlex } from "@/style/common";
import { styled } from "styled-components";

export const StyledRequestSuppliers = styled(StyledBetweenFlex)`
  background: linear-gradient(128deg, #2c7cf1 0%, rgba(0, 209, 255, 0.5) 100%);
  width: 100%;
  padding: 41px 31px;
  border-radius: 6px;
  position: relative;

  @media (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 768px) {
    border-radius: 0;
    padding: 20px;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--primary-color);
    border-radius: 6px;
    opacity: 0.5;
  }

  .text {
    color: var(--white-color);
    font-style: normal;
    padding: 10px;
    position: relative;
  }

  h3 {
    width: 440px;
    font-size: 32px;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 15px;
  }

  .text p {
    width: 390px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
  }

  @media (min-width: 769px) {
    .text button {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .text {
    }
    h3 {
      width: 100%;
      font-size: 18px;
      margin-bottom: 17px;
    }
    p {
      display: none;
    }
  }
`;
