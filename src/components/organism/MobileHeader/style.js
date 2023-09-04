import { StyledAlignFlex } from "@/style/common"
import { styled } from "styled-components";

export const StyledMobileHeader = styled(StyledAlignFlex)`
  background-color: var(--white-color);
  padding: 15px 15px 10px;

  & > div {
    width: 100%;
  }

  .logo + div img {
    width: 24px;
    height: 24px;
  }

  .search {
    margin-top: 15px;
  }

  .search {
    background-color: var(--secondary-color);
    border-radius: 6px;
    width: 100%;
    padding: 0 5px;
    border: 1px solid var(--gray-300-color);
  }

  input {
    height: 35px;
    border: none;
    outline: none;
    border-radius: 0;
    color: var(--gray-500-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    background: transparent;
  }
`;