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

  @media (min-width: 427px) and (max-width: 992px) {
    .nav-links {
      gap: 4px;
    }
    .nav-links > img + div {
      gap: 15px;
    }
    .nav-links a {
      font-size: 14px;
    }
    .lang-ship {
      gap: 18px;
    }
    select {
      font-size: 15px;
    }
  }

  @media (max-width: 767px) {
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
      padding: 10px 15px;
      color: var(--primary-color);
      background: var(--gray-200, #eff2f4);
      text-align: center;
      font-size: 16px;
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
