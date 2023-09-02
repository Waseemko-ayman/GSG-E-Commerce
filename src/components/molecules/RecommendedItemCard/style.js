import { styled } from "styled-components";

export const StyledRecommendedCard = styled.div`
  background-color: var(--white-color);
  border: 1px solid var(--gray-300-color);
  border-radius: 8px;
  padding: 20px;
  font-size: 16px;
  font-style: normal;

  @media (max-width: 425px) {
    padding: 20px 10px 15px;
  }

  @media (max-width: 321px) {
    text-align: center;
  }

  img {
    max-width: 100%;
    width: 150.222px;
    height: 170.667px;
    margin: auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 376px) {
    img {
      width: 107.582px;
      height: 122.224px;
    }
  }

  .info {
    margin-top: 14px;
  }

  span {
    color: var(--dark-color);
    font-weight: 500;
    line-height: 22px;
  }

  p {
    color: var(--gray-500-color);
    width: 186px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
  }

  @media (max-width: 376px) {
    p {
      font-size: 13px;
      width: 100%;
      line-height: normal;
    }
  }
`;
