import { styled } from "styled-components";

export const StyledRecommendedCard = styled.div`
  background-color: var(--white-color);
  border: 1px solid var(--gray-300-color);
  border-radius: 8px;
  padding: 20px;
  font-size: 16px;
  font-style: normal;

  img {
    max-width: 100%;
    width: 150.222px;
    margin: auto;
    text-align: center;
  }

  .info {
    margin-top: 14px;
  }

  .info span {
    color: var(--dark-color);
    font-weight: 500;
    line-height: 22px;
  }

  .info p {
    color: var(--gray-500-color);
    width: 186px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
  }
`;
