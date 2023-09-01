import { styled } from "styled-components";

export const StyledPaper = styled.div`
  flex: 1;

  @media (max-width: 992px) {
    display: none;
  }

  .account__paper {
    width: 200px;
    min-height: 95px;
    border-radius: 6px;
    background: var(--light2-blue);
    padding: 17px 10px 12px;
  }

  .account__paper div {
    margin-bottom: 5px;
  }

  .account__paper div img {
    max-width: 100%;
    width: 44px;
    border-radius: 50%;
  }

  .account__paper div p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .account__paper button {
    display: block;
    width: 100%;
    border-radius: 6px;
    padding: 7px 0px;
    cursor: pointer;
  }

  .account__paper button:first-of-type {
    margin-bottom: 6px;
  }
`;
