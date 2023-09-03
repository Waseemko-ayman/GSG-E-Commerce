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