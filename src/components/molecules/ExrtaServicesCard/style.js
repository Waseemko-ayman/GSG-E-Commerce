import { styled } from "styled-components";

export const StyledExtraCard = styled.div`
  background-color: var(--white-color);
  border: 1px solid var(--gray-300-color);
  border-radius: 8px;
  position: relative;

  & > img {
    max-width: 100%;
    width: 100%;
  }
  .info {
    padding: 20px;
    position: relative;
  }
  .icon {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border: 2px solid var(--white-color);
    background-color: var(--light3-blue);
    margin-top: -57.5px;
    float: right;
  }
  .icon img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  p {
    color: var(--dark-color);
    width: 175px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
  }
`;
