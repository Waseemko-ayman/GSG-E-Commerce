import { StyledAlignFlex } from "@/style/common";
import { styled } from "styled-components";

export const StyledLikeCard = styled(StyledAlignFlex)`
  margin-bottom: 15px;

  img {
    max-width: 100%;
    width: 70px;
    border: 1px solid var(--gray-300-color);
    border-radius: 4px;
    padding: 10px;
  }
  p, span {
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
  }
  p {
    color: var(--dark-color);
    font-size: 13px;
    margin-bottom: 3px;
  }
  span {
    color: var(--gray-500-color);
    font-size: 16px;
    letter-spacing: -0.2px;
  }
`;