import { StyledBetweenFlex } from "@/style/common";
import { styled } from "styled-components";

export const StyledInfoOffers = styled.div`
  padding: 20px;

  @media (max-width: 1025px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
  }

  @media (max-width: 991px) {
    & + div {
      overflow-x: auto;
      overscroll-behavior-inline: contain;
      scroll-snap-type: inline mandatory;
    }
  }

  @media (min-width: 427px) and (max-width: 991px) {
    & + div::-webkit-scrollbar {
      width: 15px;
      height: 3px;
    }
    & + div::-webkit-scrollbar-thumb {
      background-color: var(--primary-color);
      border-radius: 20px;
    }
  }

  @media (max-width: 426px) {
    & + div::-webkit-scrollbar {
      width: 15px;
      height: 0px;
    }
    & + div::-webkit-scrollbar-thumb {
      background-color: var(--primary-color);
      border-radius: 20px;
    }
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

  @media (max-width: 769px) {
    .date {
      gap: 4px;
    }
  }
`;

export const StyledBetween = styled(StyledBetweenFlex)`
  @media (max-width: 1025px) {
    flex-direction: column;
    justify-content: center;
  }
`;
