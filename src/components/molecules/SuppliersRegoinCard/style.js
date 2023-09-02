import { StyledAlignFlex } from "@/style/common";
import { styled } from "styled-components";

export const StyledSuppliersRegoinCard = styled(StyledAlignFlex)`
  @media (max-width: 426px) {
    flex-direction: column;
    text-align: center;
  }
  img {
    max-width: 100%;
    width: 28px;
  }

  .info {
    font-style: normal;
    font-weight: 400;
  }

  .info p {
    color: var(--dark-color);
    font-size: 16px;
    letter-spacing: -0.2px;
  }

  .info span {
    color: var(--gray-500-color);
    font-size: 13px;
    line-height: normal;
  }
`;
