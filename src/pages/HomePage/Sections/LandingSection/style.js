import { StyledSection } from "@/style/common";
import { styled } from "styled-components";

export const StyledLanding = styled(StyledSection)`
  padding: 20px;
  margin: 20px 0 30px;
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 13px;

  @media (max-width: 426px) {
    padding: 0;
    margin-top: 0;
  }
`;