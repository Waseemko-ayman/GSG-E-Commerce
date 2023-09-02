import { StyledReExSupp } from "@/style/common";
import { styled } from "styled-components";

export const StyledSuppliersRegoin = styled(StyledReExSupp)`
  @media (max-width: 426px) {
    h2 + div {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }
`;
