import { StyledAlignFlex } from "@/style/common";
import { styled } from "styled-components";

export const StyledSearch = styled(StyledAlignFlex)`
  border: 2px solid var(--primary-color);
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 10px;

  input {
    background: transparent;
    border: none;
    flex: 1;
    width: 421px;
    padding: 5px 10px;
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
    border-radius: 0 7px 7px 0;
    border: none;
    width: 90px;
    height: 100%;
  }
`;
