import { StyledAlignFlex } from "@/style/common";
import { styled } from "styled-components";

export const StyledPagination = styled(StyledAlignFlex)`
  margin-top: 30px;
  float: right;

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
    padding: 10px 20px 10px 0;
    border: none;
    outline: none;
    cursor: pointer;
  }

  button {
    width: 44px;
    height: 40px;
  }

  button {
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--white-color);
    border: 1px solid var(--gray-300-color);
  }

  .arrow:hover {
    background: var(--gray-300-color);
    color: var(--dark-color);
  }

  .arrow:first-of-type {
    border-radius: 6px 0 0 6px !important;
  }

  .arrow:last-of-type {
    border-radius: 0 6px 6px 0 !important;
  }
`;
