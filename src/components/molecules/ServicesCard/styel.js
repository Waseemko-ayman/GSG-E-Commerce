import { StyledAlignFlex } from "@/style/common";
import { styled } from "styled-components";

export const StyledServicesCard = styled(StyledAlignFlex)`
  .image {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: var(--gray-300-color);
  }
  h3,
  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
  }
  h3 {
    color: var(--dark-color);
  }
  p {
    color: var(--gray-400-color, #A9ACB0);
  }
`;
