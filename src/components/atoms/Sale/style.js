import { StyledFlexCenter } from "@/style/common";
import { styled } from "styled-components";

export const StyleSale = styled(StyledFlexCenter)`
  display: inline-flex;
  height: 28px;
  padding: 3px 13px 4px 13px;
  gap: 10px;
  border-radius: 29px;
  background-color: var(--sale-background);

  span {
    color: var(--sale-color);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.2px;
  }
`;
