import { styled } from "styled-components";

export const StyledSubscribe = styled.div`
  background-color: var(--gray2-200-color);
  text-align: center;
  padding: 38px 20px;
  margin-top: 20px;

  h3 {
    color: var(--base-color-dark, #1c1c1c);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: -0.2px;
  }

  h3 + p {
    max-width: 100%;
    width: 617px;
    margin: auto;
    color: var(--base-color-gray-800, #606060);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
    margin-bottom: 20px;
  }

  form div {
    background-color: var(--white-color);
    border-radius: 6px;
    width: 274px;
    height: 40px;
    padding: 0 5px;
  }

  form div input {
    border: none;
    outline: none;
    color: var(--gray-500-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    padding: 10px 10px 10px 0;
  }

  .error {
    color: var(--danger-color);
    margin-top: 5px;
    padding: 5px;
    border-radius: 2px;
    text-align: left;
  }

  @media (max-width: 321px) {
    form {
      flex-direction: column;
    }
    button {
      width: 100%;
    }
  }
`;
