import { StyledAlignFlex } from "@/style/common";
import { styled } from "styled-components";

export const StyledLinks = styled(StyledAlignFlex)`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4px;
    width: 55px;
    min-height: 50px;
  }

  img {
    width: 20px;
    height: 19px;
  }

  a span {
    display: block;
    color: var(--gray-500, #8b96a5);
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
