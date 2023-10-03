import { StyledAlignFlex } from "@/style/common";
import { styled } from "styled-components";

export const StyledNavigation = styled(StyledAlignFlex)`
  color: var(--dark-color);
  background-color: var(--white-color);
  border-top: 1px solid var(--gray-200-color);
  border-bottom: 1px solid var(--gray-200-color);
  height: 56px;

  .nav-links {
    color: var(--dark-color);
  }

  .nav-links img {
    width: 24px;
    height: 24px;
    cursor: pointer;
    z-index: 100;
    background-color: var(--white-color);
  }

  .nav-links img + div {
    overflow-x: hidden;
    transform: translateX(-570px);
    transition: all 0.3s;
  }

  .nav-links img + div.showNavigation {
    transform: translateX(0);
  }

  .nav-links a {
    color: var(--dark-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
  }

  select {
    font-size: 16px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  select:nth-child(1),
  select:nth-child(2) {
    width: 140px;
  }

  @media (min-width: 668px) {
    .nav-links {
      overflow-x: hidden;
    }
  }

  @media (min-width: 654px) and (max-width: 991px) {
    .nav-links {
      gap: 4px;
    }
    .nav-links > img + div {
      gap: 8px;
    }
    .nav-links a {
      font-size: 12px;
    }
    .currency-ship {
      gap: 15px;
    }
    select {
      font-size: 12px;
    }
    select:nth-child(1),
    select:nth-child(2) {
      width: 110px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .nav-links {
      gap: 4px;
    }
    .nav-links > img + div {
      gap: 10px;
    }
    .nav-links a {
      font-size: 13px;
    }
    .currency-ship {
      gap: 15px;
    }
    select {
      font-size: 13px;
    }
    select:nth-child(1),
    select:nth-child(2) {
      width: 110px;
    }
  }

  @media (max-width: 667px) {
    height: 55px;
    padding: 0 15px 10px;
    border: none;

    .nav-links img,
    select {
      display: none;
    }

    .nav-links > img + div {
      gap: 3px;
    }

    .nav-links a {
      width: 120px;
      padding: 8px 5px;
      color: var(--primary-color);
      background: var(--gray-200, #eff2f4);
      text-align: center;
      font-size: 14px;
      font-weight: 400;
      line-height: normal;
      border-radius: 6px;
    }

    .main__container {
      overflow-x: auto;
      overscroll-behavior-inline: contain;
      scroll-snap-type: inline mandatory;
    }

    .main__container::-webkit-scrollbar {
      width: 5px;
      height: 0;
    }
  }
`;
