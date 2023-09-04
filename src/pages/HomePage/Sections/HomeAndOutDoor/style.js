import { StyledFlex, StyledGrid } from "@/style/common";
import { styled } from "styled-components";

export const StyledFlexMobile = styled(StyledFlex)`
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const StyledGridMobile = styled(StyledGrid)`
  @media (max-width: 992px) {
    & {
      display: flex;
      overflow-x: auto;
      overscroll-behavior-inline: contain;
      scroll-snap-type: inline mandatory;
    }
  }

  @media (min-width: 427px) and (max-width: 991px) {
    &::-webkit-scrollbar {
      width: 15px;
      height: 3px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--primary-color);
      border-radius: 20px;
    }
  }

  @media (max-width: 426px) {
    &::-webkit-scrollbar {
      /* width: 15px; */
      height: 0px;
    }
  }

  @media (min-width: 992px) {
    & + button {
      display: none;
    }
  }
  @media (max-width: 992px) {
    & + button {
      justify-content: flex-start;
    }
  }
`;
