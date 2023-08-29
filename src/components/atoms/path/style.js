import { StyledFlex } from "@/style/common";
import { styled } from "styled-components";

export const StyledPath = styled(StyledFlex)`
  p {
    color: var(--gray-500-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
  }
  img {
    max-width: 100%;
    width: 20px;
  }
`;
