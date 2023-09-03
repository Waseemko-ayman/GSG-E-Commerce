import { styled } from "styled-components";

export const StyledSavedProducts = styled.div`
  .image {
    height: 240px;
    background-color: #EEE;
    padding: 20px;
    border-radius: 6px;
  }
  img {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 321px) {
    img {
      width: 150px;
      height: 150px;
    }
  }
  .info {
    margin-top: 10px;
  }
  p,
  span {
    font-size: 16px;
    font-style: normal;
  }
  p {
    color: var(--gray-800-color);
    width: 215.799px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
    margin: 10px 0 12px;
  }
  span {
    color: var(--dark-color);
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
  }

  button {
    padding: 9px;
    width: 156.58px;
  }

  @media (max-width: 426px) {
    .info {
      text-align: center;
    }
    p {
      margin: 10px auto 12px;
    }
    button {
      width: 145px;
      margin: auto;
    }
  }
`;
