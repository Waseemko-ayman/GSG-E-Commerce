import { StyledSection } from "@/style/common";
import { styled } from "styled-components";

export const StyledLanding = styled(StyledSection)`
  padding: 20px;
  margin: 20px 0 30px;
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 13px;

  @media (max-width: 768px) {
    padding: 0;
    border-radius: 0;
    border: none;
  }
`;