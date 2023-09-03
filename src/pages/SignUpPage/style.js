import { StyledSection } from "@/style/common";
import { styled } from "styled-components";

export const StyledRegister = styled(StyledSection)`
  border: none;
  width: 400px;
  margin: 60px 0 60px 0;

  h1,
  label {
    letter-spacing: -0.2px;
    font-style: normal;
  }

  h1 {
    color: var(--dark-color);
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    margin-bottom: 20px;
  }

  label {
    display: block;
    color: var(--dark-color);
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 5px;
  }

  .box {
    margin: 5px 0 15px;
  }

  @media (max-width: 321px) {
    .box:first-of-type,
    .box:nth-child(3) div {
      flex-direction: column;
      align-items: flex-start;
    }
    .box:first-of-type div,
    .box:nth-child(3) div {
      width: 100%;
    }
  }

  .selects {
    color: var(--dark-color);
    background-color: var(--white-color);
    border: 1px solid var(--gray-300-color);
    border-radius: 6px 0 0 6px;
    padding: 0 10px;
    cursor: pointer;
  }

  @media (max-width: 321px) {
    .selects {
      border-radius: 0;
    }
    select {
      width: 100%;
    }
  }

  .selects select {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-right: 25px;
    padding: 10px 10px 10px 0;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .agree {
    border-bottom: 1px solid var(--gray-300-color);
    padding: 20px 0;
  }

  .error {
    color: var(--danger-color);
    margin-top: 5px;
  }

  input[type="number"] {
    border-radius: 0 6px 6px 0;
  }

  @media (max-width: 321px) {
    input,
    .selects {
      border-radius: 0;
    }
    input[type="number"] {
      border-radius: 0;
    }
  }
`;
