import { styled } from "styled-components";

export const StyledAdvertisement = styled.div`
  background-color: var(--primary-color);
  padding: 30px;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin-bottom: 88px;

  &::before {
    content: "";
    position: absolute;
    background-color: #005ade;
    right: -20px;
    top: 0;
    width: 40%;
    height: 100%;
    transform: skewX(20deg);
  }

  .text {
    position: relative;
  }

  @media (max-width: 426px) {
    border-radius: 0;
    &::before {
      right: -35px;
    }
    & > div {
      flex-wrap: wrap;
    }
    .text {
      margin: 0 auto 15px;
      text-align: center;
    }
  }

  h3,
  p {
    color: var(--white-color);
  }
  h3 {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }
  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
  }

  @media (max-width: 426px) {
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
    button {
      margin: auto;
    }
  }
`;
