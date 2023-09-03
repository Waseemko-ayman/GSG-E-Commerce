import { styled } from "styled-components";

export const StyledDesc = styled.div`
  display: grid;
  grid-template-columns: 880px 1fr;
  gap: 20px;
  margin: 20px 0;

  @media (min-width: 769px) and (max-width: 1189px) {
    grid-template-columns: 650px 1fr;
  }

  @media (max-width: 769px) {
    grid-template-columns: 1fr;
  }

  .desc-content {
    padding: 18px 20px 30px;
  }

  p,
  table td,
  ul li {
    color: var(--gray-600-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
  }

  @media (max-width: 426px) {
    p,
    table td,
    ul li {
      font-size: 14px;
    }
  }

  table {
    border-collapse: collapse;
    margin: 24px 0;
  }

  td {
    border: 1px solid var(--gray-300-color);
    padding: 10px;
  }

  tr td:nth-child(odd) {
    max-width: 100%;
    width: 204px;
    background-color: var(--gray-200-color);
  }

  tr td:nth-child(even) {
    background-color: var(--white-color);
    width: 400px;
  }

  ul li:not(:last-child) {
    margin-bottom: 10px;
  }

  @media (max-width: 426px) {
    tr td:nth-child(odd) {
      width: 130px;
    }
    tr td:nth-child(even) {
      width: 230px;
    }
  }

  .sidebar {
    position: relative;
    height: 530px;
  }

  h3 {
    color: var(--dark-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 14px;
  }
`;
