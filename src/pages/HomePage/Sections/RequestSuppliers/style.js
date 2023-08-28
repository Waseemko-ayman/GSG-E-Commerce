import { StyledBetweenFlex } from "@/style/common";
import { styled } from "styled-components";

export const StyledRequestSuppliers = styled(StyledBetweenFlex)`
  background: linear-gradient(128deg, #2c7cf1 0%, rgba(0, 209, 255, 0.5) 100%);
  width: 100%;
  padding: 41px 31px;
  border-radius: 6px;
  position: relative;

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

  .text h3 {
    width: 440px;
    font-size: 32px;
    font-weight: 600;
    line-height: normal;
  }

  .text p {
    width: 390px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-top: 15px;
    letter-spacing: -0.2px;
  }
`;
