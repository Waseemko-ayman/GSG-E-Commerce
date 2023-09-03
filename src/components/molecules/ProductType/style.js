import { StyledAlignFlex } from "@/style/common";
import { styled } from "styled-components";

export const StyledProductType = styled(StyledAlignFlex)`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: grid;
  grid-template-columns: 2fr 5fr;
  margin-bottom: 10px;

  @media (max-width: 320px) {
    grid-template-columns: 1fr;
    gap: 5px;
  }

  @media (min-width: 321px) and (max-width: 426px) {
    grid-template-columns: 2fr 3fr;
  }

  p:first-of-type {
    color: var(--gray-500-color);
  }
  p {
    color: var(--gray-600-color);
  }
`;
