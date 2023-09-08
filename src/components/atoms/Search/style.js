import { StyledAlignFlex } from "@/style/common";
import { styled } from "styled-components";

export const StyledSearch = styled(StyledAlignFlex)`
  border: 2px solid var(--primary-color);
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;

  input {
    background: transparent;
    border: none !important;
    border-radius: 0 !important;
    flex: 1;
    width: 400px;
    padding: 5px 10px;
    height: 40px;
  }

  @media (min-width: 770px) and (max-width: 1024px) {
    input {
      width: 200px;
    }
  }

  @media (max-width: 769px) {
    input {
      width: 190px;
    }
  }

  select {
    border: none;
    border-left: 1px solid var(--primary-color);
    outline: none;
    padding: 0 5px;
    cursor: pointer;
    height: 100%;
  }

  button {
    border-radius: 0 6px 6px 0;
    border: none;
    width: 140px;
    height: 100%;
  }
`;
