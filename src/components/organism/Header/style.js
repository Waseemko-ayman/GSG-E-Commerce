import { StyledAlignFlex } from "@/style/common";
import { styled } from "styled-components";

export const StyledHeader = styled(StyledAlignFlex)`
  width: 100%;
  height: 86px;
  color: var(--dark-color);
  background-color: var(--white-color);

  .main__container > div {
    gap: 15px;
  }
`;
