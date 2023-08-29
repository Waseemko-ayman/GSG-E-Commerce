import { StyledAlignFlex } from "@/style/common";
import { styled } from "styled-components";

export const StyledNavigation = styled(StyledAlignFlex)`
  color: var(--dark-color);
  background-color: var(--white-color);
  border-top: 1px solid var(--gray-200-color);
  border-bottom: 1px solid var(--gray-200-color);
  height: 56px;

  .nav-links {
    color: var(--dark-color);
  }

  .nav-links img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  .nav-links a {
    color: var(--dark-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
  }

  select {
    font-size: 16px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
