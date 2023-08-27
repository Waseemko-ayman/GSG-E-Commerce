import { StyledBetweenAlignFlex } from "@/style/common";
import { styled } from "styled-components";

export const StyledOutdoorCard = styled(StyledBetweenAlignFlex)`
  background-color: var(--white-color);
  border-right: 1px solid var(--gray-300-color);
  border-bottom: 1px solid var(--gray-300-color);
  padding: 10px;

  .text {
    font-style: normal;

  }

  .text h3 {
    color: var(--dark-color);
    font-size: 16px;
    margin-bottom: 9px;
  }

  .text span {
    display: block;
    color: var(--gray-500-color);
    font-size: 13px;
  }
`;
