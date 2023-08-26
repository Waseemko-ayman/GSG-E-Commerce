import { StyledBetweenAlignFlex } from "@/style/common";
import { styled } from "styled-components";

export const StyledOutdoorCard = styled(StyledBetweenAlignFlex)`
  // background-color: var(--white-color);

  .text {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .text h4 {
    color: var(--dark-color);
    font-size: 16px;
  }

  .text span {
    display: block;
    color: var(--gray-500-color);
    font-size: 13px;
  }
`;
