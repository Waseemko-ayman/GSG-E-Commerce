import { styled } from "styled-components";

export const StyledCopyRight = styled.div`
  background-color: var(--gray-300-color);
  padding: 20px;

  p {
    color: var(--gray-800-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
  }

  select {
    background: transparent;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-right: 25px;
    padding: 10px 10px;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;