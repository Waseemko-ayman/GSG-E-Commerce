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

  p:first-of-type {
    color: var(--gray-500-color);
  }
  p {
    color: var(--gray-600-color);
  }
`;
