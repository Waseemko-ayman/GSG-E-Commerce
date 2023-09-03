import { StyledAlignFlex } from "@/style/common";
import { styled } from "styled-components";

export const StyledCheckbox = styled(StyledAlignFlex)`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
  p {
    color: var(--dark-color);
  }
  a {
    color: var(--primary-color);
  }

  @media (max-width: 321px) {
    p {
      font-size: 14px;
    }
  }
`;
