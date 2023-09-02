import { StyledBetweenFlex } from "@/style/common";
import { styled } from "styled-components";

export const StyledInfoOffers = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
  }

  h1 {
    color: var(--dark-color);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: -0.2px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 18px;
    }
  }

  p {
    color: var(--gray-500-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media (max-width: 768px) {
    p {
      font-size: 13px;
    }
  }

  .date {
    gap: 6px;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    .date {
      gap: 4px;
    }
  }
`;

export const StyledBetween = styled(StyledBetweenFlex)`
  @media (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
  }
`;
