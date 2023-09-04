import { StyledBetweenAlignFlex } from "@/style/common";
import { styled } from "styled-components";

export const StyledOutdoorCard = styled(StyledBetweenAlignFlex)`
  background-color: var(--white-color);
  border-right: 1px solid var(--gray-300-color);
  border-bottom: 1px solid var(--gray-300-color);
  padding: 10px;
  
  @media (min-width: 770px) and (max-width: 992px) {
    min-width: 220px;
  }
  
  @media (min-width: 427px) and (max-width: 769px) {
    min-width: 190px;
  }
  
  @media (max-width: 426px) {
    min-width: 160px;
  }

  .text {
    font-style: normal;
  }

  h3 {
    color: var(--dark-color);
    font-size: 16px;
    margin-bottom: 9px;
  }

  span {
    display: block;
    color: var(--gray-500-color);
    font-size: 13px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    border: 1px solid var(--gray-300-color);
    text-align: center;

    img {
      order: -1;
    }

    h3 {
      font-size: 13px;
    }

    span {
      display: inline-block;
    }

    span:first-child {
      margin-right: 3px;
    }
  }
`;
