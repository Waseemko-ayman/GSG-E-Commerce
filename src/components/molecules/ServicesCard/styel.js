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
    color: var(--gray-400-color, #a9acb0);
  }

  @media (min-width: 322px) and (max-width: 769px) {
    .image {
      width: 40px;
      height: 40px;
    }
    h3,
    p {
      font-size: 14px;
    }
  }

  @media (max-width: 321px) {
    .image {
      width: 40px;
      height: 40px;
    }
    h3,
    p {
      font-size: 13px;
    }
  }
`;
