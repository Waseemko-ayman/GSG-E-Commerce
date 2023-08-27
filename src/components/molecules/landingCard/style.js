import { styled } from "styled-components";

export const StyledLadningCard = styled.div`
  position: relative;
  background-image: url("assets/landingImage.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 373px;
  flex: 3;
  

  .text {
    position: absolute;
    left: 44px;
    top: 56px;
    font-style: normal;
    line-height: normal;
  }

  .text p {
    font-size: 28px;
    font-weight: 400;
  }

  .text h1 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 17px;
  }
`;
