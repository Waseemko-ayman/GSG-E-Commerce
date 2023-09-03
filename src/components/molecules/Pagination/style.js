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
    border-radius: 0 !important;
    width: 44px;
    height: 40px;
  }

  button:hover {
    background: var(--gray-300-color);
    color: var(--dark-color);
  }

  button img {
    max-width: 100%;
    width: 24px;
  }

  button:nth-child(1) {
    border-radius: 6px 0 0 6px !important;
  }

  button:nth-child(5) {
    border-radius: 0 6px 6px 0 !important;
  }
`;