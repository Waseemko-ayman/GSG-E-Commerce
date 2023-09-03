import { StyledFlex, StyledGrid } from "@/style/common";
import { styled } from "styled-components";

export const StyledFlexMobile = styled(StyledFlex)`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledGridMobile = styled(StyledGrid)`
  @media (max-width: 768px) {
    display: flex;
  }

  @media (max-width: 529px) {
    .outdoor__products {
      overflow-x: auto;
      overscroll-behavior-inline: contain;
      scroll-snap-type: inline mandatory;
    }
    .outdoor__products::-webkit-scrollbar {
      width: 15px;
      height: 0px;
    }
    .outdoor__products::-webkit-scrollbar-thumb {
      background-color: var(--primary-color);
      border-radius: 20px;
    }
  }

  @media (min-width: 769px) {
    & + button {
      display: none;
    }
  }
  @media (max-width: 768px) {
    & + button {
      justify-content: flex-start;
    }
  }
`;