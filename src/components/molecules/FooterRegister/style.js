import { styled } from "styled-components";

export const StyledFooterRegister = styled.div`
  background-color: var(--white-color);
  box-shadow: 0 0 10px #efefef;
  padding: 10px 0;
  width: 100%;

  .main__container {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }

  @media (max-width: 426px) {
    .main__container > div {
      flex-direction: column;
      justify-content: center;
    }
  }

  .image {
    border: 1px solid var(--gray-300-color);
    border-radius: 4px;
    padding: 3px;
    width: 34px;
    height: 22px;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  li {
    padding: 10px 0;
  }

  a {
    color: var(--gray-500-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
  }
  @media (max-width: 426px) {
    ul {
      gap: 20px;
    }
    a {
      font-size: 14px;
    }
  }
`;
