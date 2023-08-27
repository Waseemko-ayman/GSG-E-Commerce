import { StyledBetweenAlignFlex } from "@/style/common";
import { styled } from "styled-components";

export const StyledProductsHeader = styled(StyledBetweenAlignFlex)`
  p {
    color: var(--dark-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .selects {
    color: var(--dark-color);
    background-color: var(--white-color);
    border: 1px solid var(--gray-300-color);
    border-radius: 6px;
    padding: 0 10px;
    cursor: pointer;
  }

  .selects select {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-right: 25px;
    padding: 10px 62px 10px 0;
    border: none;
    outline: none;
    cursor: pointer;
  }

  button {
    background-color: var(--white-color);
    border: 1px solid var(--gray-300-color);
    outline: none;
    width: 38px;
    height: 40px;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--gray-300-color);
  }

  button:first-of-type {
    border-radius: 6px 0 0 6px;
  }

  button:last-of-type {
    border-radius: 0 6px 6px 0;
  }
`;