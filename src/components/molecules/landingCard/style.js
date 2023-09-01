import { styled } from "styled-components";

export const StyledLadningCard = styled.div`
  position: relative;
  background-image: url("assets/landingImage.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 373px;
  flex: 3;

  @media (max-width: 768px) {
    width: 365px;
    height: 182.222px;
  }

  .text {
    position: absolute;
    left: 44px;
    top: 56px;
    font-style: normal;
    line-height: normal;
  }

  @media (max-width: 768px) {
    .text {
      left: 25px;
      top: 26px;
    }
  }

  p {
    font-size: 28px;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    p {
      font-size: 18px;
    }
  }

  h1 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 17px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    button {
      padding: 8px;
    }
  }
`;
