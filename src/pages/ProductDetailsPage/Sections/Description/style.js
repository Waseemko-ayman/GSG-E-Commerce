import { styled } from "styled-components";

export const StyledDesc = styled.div`
  display: grid;
  grid-template-columns: 880px 1fr;
  gap: 20px;
  margin-bottom: 15px;

  .tabs {
    border-bottom: 1px solid var(--gray-300-color);
  }

  button {
    border-radius: 0 !important;
    position: relative;
  }

  button:hover {
    color: var(--primary-color);
    border-bottom: 2px solid var(--primary-color);
  }

  .desc-content {
    padding: 15px;
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
