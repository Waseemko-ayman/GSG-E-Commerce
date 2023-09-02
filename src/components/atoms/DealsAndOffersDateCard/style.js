import { StyledFlexCenter } from "@/style/common";
import { styled } from "styled-components";

export const StyledDateCard = styled(StyledFlexCenter)`
  color: var(--white-color);
  background-color: var(--gray-800-color);
  width: 45px;
  height: 50px;
  border-radius: 4px;
  text-align: center;
  flex-direction: column;

  @media (max-width: 427px) {
    color: var(--gray-500-color);
    background-color: var(--gray-200-color);
    border-radius: 0;
  }

  @media (max-width: 321px) {
    &:first-of-type {
      display: none;
    }
  }

  span {
    display: block;
    font-style: normal;
    line-height: normal;
  }

  span:first-of-type {
    font-size: 16px;
    font-weight: 700;
  }

  span:last-of-type {
    font-size: 12px;
    font-weight: 400;
  }
`;
